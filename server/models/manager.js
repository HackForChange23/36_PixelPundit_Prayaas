const mongoose = require('mongoose');



const managerSchema = new mongoose.Schema({
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
  }

})


const Manager = mongoose.model('Manager', managerSchema);

module.exports = Manager;
