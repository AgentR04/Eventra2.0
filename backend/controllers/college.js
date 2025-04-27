const College = require('../models/College');
const crypto = require('crypto');

// @desc    Create new college
// @route   POST /api/college
// @access  Public
exports.createCollege = async (req, res) => {
  try {
    const { name, code, address, city, state } = req.body;

    // Check if college already exists
    const existingCollege = await College.findOne({ code });
    if (existingCollege) {
      return res.status(400).json({
        success: false,
        error: 'College with this code already exists'
      });
    }

    // Create college
    const college = await College.create({
      name,
      code,
      address,
      city,
      state
    });

    res.status(201).json({
      success: true,
      data: college
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Get all colleges
// @route   GET /api/college
// @access  Public
exports.getColleges = async (req, res) => {
  try {
    const colleges = await College.find().select('name code city state');

    res.status(200).json({
      success: true,
      count: colleges.length,
      data: colleges
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Get college by code
// @route   GET /api/college/:code
// @access  Public
exports.getCollegeByCode = async (req, res) => {
  try {
    const college = await College.findOne({ code: req.params.code });

    if (!college) {
      return res.status(404).json({
        success: false,
        error: 'College not found'
      });
    }

    res.status(200).json({
      success: true,
      data: {
        name: college.name,
        code: college.code,
        address: college.address,
        city: college.city,
        state: college.state,
        committees: college.committees
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Create invitation code
// @route   POST /api/college/invitation
// @access  Private/Admin
exports.createInvitation = async (req, res) => {
  try {
    const { collegeCode, email, role, committee } = req.body;

    // Check if college exists
    const college = await College.findOne({ code: collegeCode });
    if (!college) {
      return res.status(404).json({
        success: false,
        error: 'College not found'
      });
    }

    // Generate invitation code
    const invitationCode = crypto.randomBytes(4).toString('hex');

    // Add invitation to college
    college.invitationCodes.push({
      code: invitationCode,
      email,
      role: role || 'student',
      committee: committee || '',
      used: false
    });

    await college.save();

    res.status(201).json({
      success: true,
      data: {
        invitationCode,
        email,
        role,
        committee
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Verify invitation code
// @route   GET /api/college/invitation/:code
// @access  Public
exports.verifyInvitation = async (req, res) => {
  try {
    const code = req.params.code;
    
    // Find college with this invitation code
    const college = await College.findOne({
      'invitationCodes.code': code
    });

    if (!college) {
      return res.status(404).json({
        success: false,
        error: 'Invalid invitation code'
      });
    }

    // Find the invitation
    const invitation = college.invitationCodes.find(inv => inv.code === code);

    if (invitation.used) {
      return res.status(400).json({
        success: false,
        error: 'Invitation code already used'
      });
    }

    res.status(200).json({
      success: true,
      data: {
        collegeCode: college.code,
        collegeName: college.name,
        email: invitation.email,
        role: invitation.role,
        committee: invitation.committee
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};
