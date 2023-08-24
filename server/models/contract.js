const mongoose = require('mongoose');



const contractSchema = new mongoose.Schema({
  total_grant: {
    type: Number,
    required: true
  },
  total_repay: {
    type: Number,
    required: false
  },
  status:{
    type: Number,
    default: 0,
    min: 0,
    max: 6,
    integer: true,
    required: false
  },
  farmer1:{
    PrayaasId:{
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    KCC:{
      type: String,
      required: false
    }
  },
  farmer2: {
    PrayaasId:{
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    KCC:{
      type: String,
      required: false
    }
  },
  farmer3:{
    PrayaasId:{
        type: String,
        required:false
    },
    amount: {
        type: Number,
        required: false
    },
    KCC:{
      type: String,
      required: false
    }
  },
  fpo_prayasId: {
      type: String,
      required: true
  },
  fpo_approved: {
    type: Boolean,
    default: false
  },
  service_approved: {
    type: Boolean,
    default: false
  },
  current_grant: {
    type: Number,
    default: 0
  },
  current_repay: {
    type: Number,
    default: 0
  },
  isComplete: {
    type: Boolean,
    default: false
  },
  crop: {
    type: String,
    required: false
  },
  duration: {
    type: String,     //In Months
    required: false
  },
  interest_rate: {
    type: Number,
    required: false,
    default: 4
  },
  requirement:{
    type:String,
    required: false
  },
  zone: {
    type: String,
    required: true
  }

})


const Contract = mongoose.model('Contract', contractSchema);

module.exports = Contract;
