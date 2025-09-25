// In userController.js
const User = require('../models/User');

// Update Profile
exports.updateProfile = async (req, res) => {
  const { name, username } = req.body;
  try {
    const user = await User.findOneAndUpdate({ email: req.user.email }, { name, username }, { new: true });
    res.json({ message: "Profile updated successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Error updating profile" });
  }
};
