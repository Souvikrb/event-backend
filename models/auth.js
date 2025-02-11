const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
    minlength: 2,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 128
  },
  role: { 
    type: String, 
    required: true, 
    enum: ['admin', 'user', 'manager'], 
    default: 'user'
  },
  designation: {
    type: String,
    trim: true, 
  },
  profileImage: {
    type: String, // URL to the image
    trim: true, 
  },
  phone: {
    type: String, // Store phone as a string to handle country codes
    trim: true, 
  },
  status: {
    type: Boolean, // Status should be Boolean (active/inactive)
    default: true
  }, 
  nameInCharge: {
    type: String,
    trim: true, 
  }, 
  postalCode: {
    type: String, // Postal codes can contain letters in some countries
    trim: true, 
  }, 
  country: {
    type: String,
    trim: true, 
  },
  price: {
    type: Number, // Price should be a number
    min: 0
  },
  city: {
    type: String,
    trim: true, 
  },
  destination: {
    type: String,
    trim: true, 
  },
  definition: {
    type: String,
    trim: true, 
  },
  workingHours: {
    type: Number, // Working hours should be a number
    min: 0,
    max: 24
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
