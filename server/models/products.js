const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: [true, "Quantity Should be mentioned"]
  },
  cost: {
    type: Number,
    required: [true, "cost should be integer"]
  },
  owner: {
    name: {
      type: String,
      required: [true, "Owner is required"]
    },
    id: {
      type: String,
      required: [true, "Owner Id is required"]
    }
  },
  rented: {
    type: Boolean,
    default: false
  },
  customer: {
    type: String,
    required: false,
    default: null
  },
  postedAt: {
    type: Date,
    required: false,
    default: Date.now
  },
  slug: {
    type: String,
    required: false
  },
  img: {
    type: String,
    required: false
  },
  
})


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
