import React, { useState } from 'react';
import "../styles/EditProfile.css";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log("Updated Info:", { name, gender, dob });
    alert("Profile updated successfully!");
  };

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile</h1>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>

        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
