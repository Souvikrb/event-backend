const express = require('express');
const { register, login,validateUserToken,setLanguage } = require('../controllers/authController');
const { sendEmailOtp,verifyEmailOtp,forgotPassword } = require("../controllers/emailVerificationController")
const multer = require("multer");
const upload = multer();
const router = express.Router();
const validateToken = require("../middleware/authMiddleware");
// Route for user registration
/**
 * @route   POST /api/users/register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register',upload.none(), register);

// Route for user login
/**
 * @route   POST /api/users/login
 * @desc    Login a user and return a token
 * @access  Public
 */
router.post('/login/:id?',upload.none(), login);

router.post('/sendEmailOTP',upload.none(), sendEmailOtp);
router.post('/verifyEmailOTP',upload.none(), verifyEmailOtp);
router.post('/forgotPassword',upload.none(), forgotPassword);
router.get('/authTokenValidate',validateToken,upload.none(), validateUserToken);
router.post('/set-language',upload.none(), setLanguage);
// Export the router
module.exports = router;
