const express = require('express');
const { checkAuth, checkRole } = require('../middleware/auth');
const router = express.Router();

// Import college controller (we'll create this next)
const collegeController = require('../controllers/college');

// College routes
router.post('/', collegeController.createCollege);
router.get('/', collegeController.getColleges);
router.get('/:code', collegeController.getCollegeByCode);

// Protected routes for college management
router.post('/invitation', checkAuth, checkRole('admin'), collegeController.createInvitation);
router.get('/invitation/:code', collegeController.verifyInvitation);

module.exports = router;
