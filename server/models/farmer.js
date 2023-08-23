const mongoose = require('mongoose');

function generateRandomNumber() {
  return Math.floor(Math.random() * 1000000);
}

function generateDynamicId(role) {
  const prefix = '';
  switch (role) {
    case 'farmer':
      prefix = 'FAM';
      break;
    case 'FPO manager':
      prefix = 'FPM';
      break;
    case 'Service provider':
      prefix = 'Spv';
      break;
    default:
      throw new Error('Invalid role');
  }
  return `${prefix}${generateRandomNumber()}`;
}


const farmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  contact_no: {
    type: Number,
    required: [true, "Mobile no is Needed"]
  },
  pin_code: {
    type: Number,
    required: [true, "Pin Code is required"]
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  adhaar_no: {
    type: Number,
    required: false
  },
  pan: {
    type: String,
    required: false
  },
  role: {
    type: String,
    enum: ['farmer', 'fpo_manager', 'service_provider'],
    required: true
  },
  address: {
    type: String,
    required: false,
    default: null
  },
  id: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: [true, "Id is required"]
  },
  email: {
    type: String,
    required: false
  },
  photoPath: {
    type: String,
    required: false
  },
  zone: {
    type: String,
    required: [true, "Pincode is required"]
  }

})


const Farmer = mongoose.model('Farmer', farmerSchema);

module.exports = Farmer;
