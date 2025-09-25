// In server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON data from incoming requests
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes'); // Make sure this is correct
const userRoutes = require('./routes/userRoutes'); // If you have this, also include it

// Use routes with correct prefixes
app.use('/auth', authRoutes); // All routes in authRoutes will start with /auth
app.use('/user', userRoutes); // If you have user-related routes

// Basic test route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
