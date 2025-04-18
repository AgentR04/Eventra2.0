const express = require('express');
const { register, login, getMe, logout } = require('../controllers/auth');
const { checkAuth } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', checkAuth, getMe);
router.get('/logout', checkAuth, logout);

module.exports = router;
