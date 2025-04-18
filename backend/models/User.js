const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  phone: {
    type: String,
    required: [true, 'Please add a phone number']
  },
  role: {
    type: String,
    enum: ['student', 'faculty', 'admin', 'committee_head', 'committee_member'],
    default: 'student'
  },
  committee: {
    type: String,
    default: ''
  },
  skills: {
    type: String,
    default: ''
  },
  availability: {
    type: [String],
    default: []
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false
  },
  collegeCode: {
    type: String,
    required: [true, 'Please add a college code']
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Simple password verification method
UserSchema.methods.verifyPassword = function(enteredPassword) {
  return this.password === enteredPassword;
};

module.exports = mongoose.model('User', UserSchema);
