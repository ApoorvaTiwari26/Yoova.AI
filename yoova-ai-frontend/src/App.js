import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

// Pages & Components
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ForgotPasswordFlow from "./components/Auth/ForgotPassword/ForgotPasswordFlow";
import Home from "./pages/Home";
import ActionPage from "./pages/ActionPage";
import EditProfile from "./pages/EditProfile";
import Settings from "./pages/Settings";
import PrivacySecurity from "./pages/PrivacySecurity";
import History from "./pages/History";
import "./App.css";

import { AppSettingsProvider, useAppSettings } from "./context/AppSettingsContext";

// 🌟 Wrapper to apply settings globally
function AppWrapper() {
  return (
    <AppSettingsProvider>
      <AppContainer />
    </AppSettingsProvider>
  );
}

function AppContainer() {
  const { darkMode, fontStyle, fontSize } = useAppSettings();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div
      className="app-root"
      style={{
        fontFamily: fontStyle,
        fontSize: fontSize,
        backgroundImage: darkMode ? `url('/assets/darkthemewallpaper.jpg')` : "none",
        backgroundColor: darkMode ? "#111" : "#fff",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: darkMode ? "#fff" : "#000",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Router>
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          <Route path="/forgot-password" element={<ForgotPasswordFlow />} />
          <Route path="/generate/:platform" element={<ActionPage />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/privacy-security" element={<PrivacySecurity />} />
          <Route path="/history" element={<History />} />
          <Route path="/" element={user ? <Home user={user} /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppWrapper;
