import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaCog, FaShieldAlt, FaHistory, FaSignOutAlt, FaBars } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import "./Sidebar.css";

const Sidebar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </div>

      {isOpen && (
        <div className="profile-section">
          <p>Hi, {user?.displayName?.split(" ")[0] || "User"} 👋</p>
        </div>
      )}

      <nav className="menu">
        <ul>
          <li>
            <Link to="/edit-profile"><FaUser /> {isOpen && "Edit Profile"}</Link>
          </li>
          <li>
            <Link to="/settings"><FaCog /> {isOpen && "Settings"}</Link>
          </li>
          <li>
            <Link to="/privacy-security"><FaShieldAlt /> {isOpen && "Privacy & Security"}</Link>
          </li>
          <li>
            <Link to="/history"><FaHistory /> {isOpen && "History"}</Link>
          </li>
        </ul>
      </nav>

      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt /> {isOpen && "Logout"}
      </button>
    </div>
  );
};

export default Sidebar;
