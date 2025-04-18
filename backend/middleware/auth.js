const User = require('../models/User');

// Simple authentication middleware using email in request body
exports.checkAuth = async (req, res, next) => {
  // Get email from request body or query
  const email = req.body.email || req.query.email;
  
  if (!email) {
    return res.status(401).json({
      success: false,
      error: 'Authentication required. Please provide email.'
    });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'User not found'
      });
    }
    
    // Add user to request object
    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
};

// Role-based authorization middleware
exports.checkRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: `User role ${req.user.role} is not authorized to access this route`
      });
    }
    next();
  };
};
