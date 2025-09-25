import React, { createContext, useState, useContext } from "react";

const AppSettingsContext = createContext();

export const AppSettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontStyle, setFontStyle] = useState("Arial");
  const [fontSize, setFontSize] = useState("16px");

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const changeFontStyle = (style) => setFontStyle(style);
  const changeFontSize = (size) => setFontSize(size);

  return (
    <AppSettingsContext.Provider
      value={{ darkMode, toggleDarkMode, fontStyle, fontSize, changeFontStyle, changeFontSize }}
    >
      {children}
    </AppSettingsContext.Provider>
  );
};

export const useAppSettings = () => useContext(AppSettingsContext);
