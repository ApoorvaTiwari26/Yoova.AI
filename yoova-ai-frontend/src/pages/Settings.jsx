import React from "react";
import { useAppSettings } from "../context/AppSettingsContext";
import "../styles/Settings.css";

const fontOptions = ["Arial", "Georgia", "Courier New", "Times New Roman", "Roboto", "Comic Sans MS"];
const sizeOptions = ["14px", "16px", "18px", "20px", "22px", "24px"];

const Settings = () => {
  const {
    darkMode,
    toggleDarkMode,
    fontStyle,
    fontSize,
    changeFontStyle,
    changeFontSize,
  } = useAppSettings();

  return (
    <div className="settings-page">
      <h1>Settings</h1>

      <div className="setting-section">
        <label>Theme Mode:</label>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <div className="setting-section">
        <label>Font Style:</label>
        <select value={fontStyle} onChange={(e) => changeFontStyle(e.target.value)}>
          {fontOptions.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

      <div className="setting-section">
        <label>Font Size:</label>
        <select value={fontSize} onChange={(e) => changeFontSize(e.target.value)}>
          {sizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="setting-section preview-box" style={{ fontFamily: fontStyle, fontSize: fontSize }}>
        <p>This is a preview of your selected font and size!</p>
      </div>
    </div>
  );
};

export default Settings;
