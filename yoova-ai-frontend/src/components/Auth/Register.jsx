import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Firebase auth import
import "../../styles/Register.css"; // Ensure CSS is properly linked

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ✅ For navigation after registration

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // ✅ Password Validation: At least 6 characters, 1 uppercase, 1 lowercase
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must have at least 6 characters with 1 uppercase and 1 lowercase letter.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered successfully:", email);
      navigate("/"); // ✅ Redirect to Home Page after successful registration
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" className="auth-input" value={fullName} onChange={(e) => setFullName(e.target.value)} required />

          {/* Gender Dropdown */}
          <select className="auth-input" value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Rather not say</option>
          </select>

          <input type="email" placeholder="Email" className="auth-input" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <input type="text" placeholder="Username" className="auth-input" value={username} onChange={(e) => setUsername(e.target.value)} required />

          <input type="password" placeholder="Password" className="auth-input" value={password} onChange={(e) => setPassword(e.target.value)} required />

          {/* Date of Birth Picker */}
          <input type="date" className="auth-input" value={dob} onChange={(e) => setDob(e.target.value)} required min="1970-01-01" />

          <button type="submit" className="auth-button">Register</button>
        </form>
        
        <p className="auth-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
