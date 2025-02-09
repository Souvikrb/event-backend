const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
    minlength: 2, // Minimum length for the name
    maxlength: 100 // Maximum length for the name
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate emails
    trim: true,
    validate: {
      validator: function (v) {
        // Regular expression to validate email format
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Enforce a minimum length for security
    maxlength: 128 // Optional: Set a maximum length for security best practices
  },
  role: { 
    type: String, 
    required: true, 
    enum: ['admin', 'user', 'manager'], // Define roles
    default: 'user'
  },
  designation: {
    type: String,
    trim: true, 
  },
  profileImage: {
    type: String,
    trim: true, 
  },
  phone: {
    type: String,
    trim: true, 
  },
  status: {
    type: String,
    trim: true, 
  }, 
  inCharge: {
    type: String,
    trim: true, 
  }, 
  postalcode: {
    type: String,
    trim: true, 
  }, 
  price: {
    type: String,
    trim: true, 
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('User', userSchema);
