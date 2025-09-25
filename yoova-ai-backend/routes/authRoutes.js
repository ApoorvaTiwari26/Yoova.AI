const express = require('express');
const router = express.Router();

// Sample route for login
router.post('/login', (req, res) => {
  res.send('Login route');
});

// Sample route for registration
router.post('/register', (req, res) => {
  res.send('Register route');
});

module.exports = router;  // Ensure this is exported correctly
