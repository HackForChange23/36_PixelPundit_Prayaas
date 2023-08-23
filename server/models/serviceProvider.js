const mongoose = require('mongoose');



const serviceSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    orders: [
        {
            amount: {
                type: Number,
                required: false
            },
            crop: {
                type: String,
                required: false
            },
            quantity: {
                type: Number,
                required: false
            },
            isTaken: {
                type: Boolean,
                required: false
            }
        }
    ]
    
  
})


const ServiceProvider = mongoose.model('ServiceProvider', serviceSchema);

module.exports = ServiceProvider;
