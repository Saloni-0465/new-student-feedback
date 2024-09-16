const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Define routes and their handlers
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser); // Ensure this function is defined in authController
// router.get('/verify/:token', authController.verifyEmail); // Add route for email verification
// console.log('authRoutes:', router);

module.exports = router;



