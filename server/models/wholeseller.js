const mongoose = require('mongoose');



const wholeSellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: true
    },
    gstin: {
        type: String,
        required: [true, "gstin is required"]
    },
    contact_no: {
        type: Number,
        required: [true, "Contact no is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    }
})


const Wholeseller = mongoose.model('Wholeseller', wholeSellerSchema);

module.exports = Wholeseller;
