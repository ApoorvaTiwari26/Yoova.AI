import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Firebase auth import
import "../../styles/Login.css"; // ✅ Make sure this is correctly imported

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // ✅ Redirect to Home Page after login
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="title">Welcome Back!</h2>
        <p className="subtitle">
          Don’t have an account? <Link to="/register">Sign Up</Link>
        </p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="options">
            <label>
              <input type="checkbox" /> Keep me logged in
            </label>
            <Link to="/forgot-password">Forgot password?</Link>

          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}
