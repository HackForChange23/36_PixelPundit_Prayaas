const mongoose = require('mongoose');



const wholeSellerMarketPlaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    farmer: {
        type: String,
        required: [true, "Farmer Id is required"]
    },
    cost: {
        type: Number,
        required: [true, "Cost is required"]
    },
    minimumQuantity: {
        type: Number,
        required: [true, "Minimum Quantity is Required"]
    },
    image: {
        type: String,
        required: false
    },
    slug: {
        required: true,
        type: String
    }
})


const WholesellerMarket = mongoose.model('WholesellerMarketPlace', wholeSellerMarketPlaceSchema);

module.exports = WholesellerMarket;
