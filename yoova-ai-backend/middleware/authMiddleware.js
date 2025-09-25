// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Get token from headers
  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify token
    req.user = decoded;  // Attach the user info to the request object
    next();  // Call the next middleware or route handler
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = authenticateToken;
