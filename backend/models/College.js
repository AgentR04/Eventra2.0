const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a college name'],
    unique: true,
    trim: true
  },
  code: {
    type: String,
    required: [true, 'Please add a college code'],
    unique: true,
    trim: true
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  city: {
    type: String,
    required: [true, 'Please add a city']
  },
  state: {
    type: String,
    required: [true, 'Please add a state']
  },
  details: {
    festName: String,
    startDate: String,
    endDate: String,
    committeeCount: String,
    eventCount: String,
    festMode: String,
    classroomCount: String,
    auditoriumCount: String,
    footfallStrength: String,
    floorCount: String
  },
  committees: [{
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  }],
  invitationCodes: [{
    code: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
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
    used: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('College', CollegeSchema);
