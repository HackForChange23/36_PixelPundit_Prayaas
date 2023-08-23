const express = require('express');
const Contract = require('../models/contract'); 

function getCropCategory(cropName) {
    const shortDurationCrops = ["Radishes", "Spinach", "Lettuce", "Green beans"];
    const mediumDurationCrops = ["Carrots", "Tomatoes", "Cucumbers", "Peppers", "Eggplants", "Summer Squash", "Pumpkins"];
    const longDurationCrops = ["Potatoes", "Onions", "Watermelons", "Muskmelons", "Winter Squash", "Sweet Corn", "Broccoli", "Cauliflower"];

    if (shortDurationCrops.includes(cropName)) {
        return 1;
    } else if (mediumDurationCrops.includes(cropName)) {
        return 3;
    } else if (longDurationCrops.includes(cropName)) {
        return 6;
    } else {
        return 12;
    }
}



const postContract = async (req, res) => {
      try {
          const { total_grant, total_repay, farmer1, farmer2, farmer3, crop, reason } = req.body;
  
          const newContract = new Contract({
              total_grant,
              total_repay,
              farmer1,
              farmer2,
              farmer3,
              crop,
              reason,
              duration: getCropCategory(crop)
          });

          if (!total_grant || !total_repay || !farmer1 || !farmer2 || !farmer3) {
            return res.status(400).json({ success: false, msg: "Missing required fields" });
        }
  
          await newContract.save();
  
          return res.status(201).json({ success: true, msg: "Contract created successfully" });
      } catch (error) {
          console.error(error);
          return res.status(500).json({ success: false, msg: "Error creating contract" });
      }
  };
  
const approveFPO = async (req, res) => {
    try {
        const { contractId } = req.body;

        if (!contractId) {
            return res.status(400).json({ success: false, msg: "Missing contractId in request body" });
        }

        // Find the contract by ID and update the fpo_approved field
        const updatedContract = await Contract.findByIdAndUpdate(
            contractId,
            { fpo_approved: true },
            { new: true }
        );

        if (!updatedContract) {
            return res.status(404).json({ success: false, msg: "Contract not found" });
        }

        return res.status(200).json({ success: true, msg: "FPO approval set to true for the contract", contract: updatedContract });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, msg: "Error updating contract" });
    }
};

const approveServiceProvider = async (req, res) => {
    try {
        const { contractId } = req.body;

        if (!contractId) {
            return res.status(400).json({ success: false, msg: "Missing contractId in request body" });
        }


        const updatedContract = await Contract.findByIdAndUpdate(
            contractId,
            { service_approved: true },
            { new: true }
        );

        if (!updatedContract) {
            return res.status(404).json({ success: false, msg: "Contract not found" });
        }

        return res.status(200).json({ success: true, msg: "FPO approval set to true for the contract", contract: updatedContract });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, msg: "Error updating contract" });
    }
};

const increaseStatus = async (req, res) => {
    try {
        const { contractId } = req.body;

        const updatedContract = await Contract.findByIdAndUpdate(
            contractId,
            { $inc: { status: 1 } },
            { new: true }
        );

        if (!updatedContract) {
            return res.status(404).json({ success: false, msg: "Contract not found" });
        }

        if (updatedContract.status === 6) {
            updatedContract.isComplete = true;
            await updatedContract.save();
        }

        return res.status(200).json({ success: true, msg: "Status updated by 1 for the contract", contract: updatedContract });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, msg: "Error updating contract" });
    }
};

module.exports = increaseStatus;


const getAllContracts = async (req, res) => {

    try {
      const reqQuery = {...req.query};
      const removeFields = ['select', 'sort', 'limit', 'page'];
      removeFields.forEach(param => delete reqQuery[param]);
  
      let queryStr = JSON.stringify(reqQuery);
      queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
      query = Contract.find(JSON.parse(queryStr));
      
  
      //Selection
      if (req.query.select){
        const fields = req.query.select.split(',').join(' ');
        query = query.select(fields);
      }
      
      // Sorting
      if (req.query.sort){
        const sortBy = req.query.sort.split(',').join(' ');
        query = query.sort(sortBy);
      } else{
        query = query.sort('-postedAt');
      }
  
      //Pagination
      const page = parseInt(req.query.page, 10) || 1;
      const limit = parseInt(req.query.limit, 10) || 6;
      const startIndex = (page -1)*limit;
      const endIndex = page*limit;
      const total = await Contract.countDocuments(query);
  
      query = query.skip(startIndex).limit(limit);
      const pagination = {};
      if (endIndex < total){
        pagination.next = {
          page: page + 1,
          limit
        }
      }
      if (startIndex > 0){
        pagination.prev = {
          page: page - 1,
          limit
        }
      }
  
      const products = await query;    
      if (!products){
          return res.status(401).json({success: false, msg: "No Products Listed"});
      }   
      return res.status(200).json({success: true, count: total, pagination, data: products});    
    } catch (error) {
      console.log(`${error.message} (error)`.red);
      return res.status(400).json({success: false, msg: error.message});
    }
     
};






module.exports = {
    postContract,
    approveFPO,
    approveServiceProvider,
    increaseStatus,
    getAllContracts
};
