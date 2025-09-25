const express = require('express');
const router = express.Router();
const {
  updateProfile,
  updateCredentials,
  getHistory
} = require('../controllers/userController');

router.post('/update-profile', updateProfile);
router.post('/update-credentials', updateCredentials);
router.get('/history', getHistory);

module.exports = router;  // Ensure this is exported correctly
