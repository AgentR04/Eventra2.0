const express = require('express');
const { checkAuth, checkRole } = require('../middleware/auth');
const router = express.Router();

// Import user controller (we'll create this next)
const userController = require('../controllers/user');

// User routes
router.get('/', checkAuth, checkRole('admin'), userController.getUsers);
router.get('/committee/:committee', checkAuth, userController.getUsersByCommittee);
router.get('/:id', checkAuth, userController.getUserById);
router.put('/:id', checkAuth, userController.updateUser);
router.delete('/:id', checkAuth, checkRole('admin'), userController.deleteUser);

module.exports = router;
