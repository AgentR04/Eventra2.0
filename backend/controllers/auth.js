const User = require('../models/User');
const College = require('../models/College');

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res) => {
  try {
    const {
      collegeCode,
      invitationCode,
      name,
      email,
      phone,
      role,
      committee,
      skills,
      availability,
      password
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User with this email already exists'
      });
    }

    // Verify college code
    const college = await College.findOne({ code: collegeCode });
    if (!college) {
      return res.status(400).json({
        success: false,
        error: 'Invalid college code'
      });
    }

    // Verify invitation code if provided
    if (invitationCode) {
      const invitation = college.invitationCodes.find(
        inv => inv.code === invitationCode && inv.email === email && !inv.used
      );

      if (!invitation) {
        return res.status(400).json({
          success: false,
          error: 'Invalid invitation code or already used'
        });
      }

      // Mark invitation as used
      invitation.used = true;
      await college.save();
    }

    // Create user
    const user = await User.create({
      name,
      email,
      phone,
      role: role || 'student',
      committee: committee || '',
      skills: skills || '',
      availability: availability || [],
      password, // Password stored as plain text now (not recommended for production)
      collegeCode
    });

    // No session management needed

    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        committee: user.committee,
        collegeCode: user.collegeCode
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
  try {
    const { email, password, collegeCode } = req.body;

    // Validate email & password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Please provide an email and password'
      });
    }

    // Build query - if collegeCode is provided, include it in the query
    const query = { email };
    if (collegeCode) {
      query.collegeCode = collegeCode;
    }

    // Check for user
    const user = await User.findOne(query).select('+password');

    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

    // Check if password matches (using simple verification)
    const isMatch = user.verifyPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

    // No session management needed

    res.status(200).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        committee: user.committee,
        collegeCode: user.collegeCode
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
  try {
    // User is already available in req.user from the checkAuth middleware
    res.status(200).json({
      success: true,
      data: req.user
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Log user out / clear session
// @route   GET /api/auth/logout
// @access  Private
exports.logout = async (req, res) => {
  // No session to clear
  
  res.status(200).json({
    success: true,
    data: {}
  });
};
