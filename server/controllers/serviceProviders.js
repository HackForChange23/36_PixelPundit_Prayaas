const Farmer = require("../models/farmer")
const Manager = require("../models/manager")
const ServiceProvider = require("../models/serviceProvider")

const getAllServiceProviders=  async (req, res) => {
    try {
      const serviceProviders = await ServiceProvider.find();
      console.log(serviceProviders)

      res.status(200).json({success: true, msg: serviceProviders});
      
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
  };



module.exports = {
    getAllServiceProviders
};
