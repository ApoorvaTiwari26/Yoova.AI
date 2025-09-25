// controllers/authController.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    
    // Create a JWT token
    const token = jwt.sign({ email: user.email, userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    res.json({ message: "Login successful", token });  // Send the token in the response
  } catch (err) {
    res.status(500).json({ message: "Error logging in" });
  }
};
