import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Sidebar from "../components/Dashboard/Sidebar";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home({ user }) {
  const navigate = useNavigate();

  const socialPlatforms = [
    { name: "Facebook", icon: <FaFacebook />, path: "/generate/facebook" },
    { name: "Instagram", icon: <FaInstagram />, path: "/generate/instagram" },
    { name: "Twitter", icon: <FaTwitter />, path: "/generate/twitter" },
    { name: "LinkedIn", icon: <FaLinkedin />, path: "/generate/linkedin" },
    { name: "Email", icon: <FaEnvelope />, path: "/generate/email" },
  ];

  return (
    <div className="app-layout">
      <Sidebar user={user} />
      <main className="main-content">
        <h1 className="home-heading">Welcome to Yoova AI</h1>
        <p className="home-subheading">Select a platform to generate smart content with ✨</p>

        <div className="platforms-container">
          {socialPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="platform-box"
              onClick={() => navigate(platform.path)}
            >
              <div className={`icon-wrapper ${platform.name.toLowerCase()}`}>
                {platform.icon}
              </div>
              <span className="platform-label">{platform.name}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
