const Farmer = require("../models/farmer")
const Manager = require("../models/manager")
const Product = require("../models/products")
const Wholeseller = require("../models/wholeseller")
const bcrypt = require("bcrypt")

function convertToSlug(str) {
    const slug = str.replace(/\s+/g, '-');
    const lowercaseSlug = slug.toLowerCase();
    return lowercaseSlug;
  }

const postProduct = async (req, res) => {
    try {
    
        const { name, quantity, cost, owner_id, owner_name } = req.body;
        const existingProduct = await Product.findOne({ name });

        if (existingProduct) {
            return res.status(400).json({ success: false, msg: "Product with the same name already exists" });
        }
        const newProduct = new Product({
            name,
            quantity,
            cost,
            owner : {name: owner_name, id: owner_id},
            slug: convertToSlug(name)
        });

        const savedProduct = await newProduct.save();

        return res.status(201).json({ success: true, msg: "Product created successfully", product: savedProduct });

    } catch (error) {
        return res.status(500).json({ success: false, msg: "Some Error Occurred", error: error.message });
    }
}


const getProductByName = async (req, res) => {
    try {

        const slug = req.params.slug; 
        const product = await Product.findOne({ slug: slug });

        if (!product) {
            return res.status(404).json({ success: false, msg: "Product not found" });
        }

        return res.status(200).json({ success: true, product });
    } catch (error) {
        return res.status(400).json({ success: false, msg: "Some Error Occurred", error: error.message });
    }
}


const getAllProducts = async (req, res) => {

    try {
      const reqQuery = {...req.query};
      const removeFields = ['select', 'sort', 'limit', 'page'];
      removeFields.forEach(param => delete reqQuery[param]);
  
      let queryStr = JSON.stringify(reqQuery);
      queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
      query = Product.find(JSON.parse(queryStr));
      
  
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
      const total = await Product.countDocuments(query);
  
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
      return res.status(200).json({success: true, count: products.length, pagination, data: products});    
    } catch (error) {
      console.log(`${error.message} (error)`.red);
      return res.status(400).json({success: false, msg: error.message});
    }
     
};


const rentProduct = async (req, res) => {
  try {
    const { product_id, customer_id } = req.body;

    const product = await Product.findOne({ _id: product_id });
    if (!product) {
      return res.status(400).json({ success: false, msg: "No such Product" });
    }

    // Update the product
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: product_id },
      { $set: { customer: customer_id, rented: true } },
      { new: true } // Return the updated document
    );

    return res.status(200).json({ success: true, msg: "Product rented successfully", product: updatedProduct });
  } catch (error) {
    return res.status(400).json({ success: false, msg: "Some Error Occurred", error: error.message });
  }
};



const registerWholeseller = async (req, res) => {
  try {
    const { contact_no, name, password, email, gstin, address } = req.body;

    const existingWholeseller = await Wholeseller.findOne({ gstin });
    if (existingWholeseller) {
      return res.status(400).json({ success: false, msg: "Account already exists!" });
    }


    const hashPassword = await bcrypt.hash(password, 10);


    const newWholeseller = new Wholeseller({
      contact_no,
      name,
      password: hashPassword,
      email,
      gstin,
      address,
    });

    await newWholeseller.save();
    console.log(`Wholeseller '${name}' just registered`);

    return res.status(200).json({ success: true, msg: "Registration complete!" });
  } catch (error) {
    console.log(`${error}`.red);
    return res.status(400).json({ success: false, msg: "Some error occurred" });
  }
};


const getAllWholeSellers = async (req, res) => {

  try {
    const reqQuery = {...req.query};
    const removeFields = ['select', 'sort', 'limit', 'page'];
    removeFields.forEach(param => delete reqQuery[param]);

    let queryStr = JSON.stringify(reqQuery);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
    query = Wholeseller.find(JSON.parse(queryStr));
    

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
    const total = await Wholeseller.countDocuments(query);

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
        return res.status(401).json({success: false, msg: "No WholeSellers Registered"});
    }   
    return res.status(200).json({success: true, count: products.length, pagination, data: products});    
  } catch (error) {
    console.log(`${error.message} (error)`.red);
    return res.status(400).json({success: false, msg: error.message});
  }
   
};

async function loginWholeSeller(req, res) {
  try {
    const { contact_no, password } = req.body;
    const wholeseller = await Wholeseller.findOne({ contact_no });
    if (!wholeseller) {
      return res.status(404).json({ success: false, msg: "Wholeseller not found" });
    }
    const passwordCheck = await bcrypt.compare(password, wholeseller.password);
    if (!passwordCheck) {
      return res.status(401).json({ success: false, msg: "Incorrect password" });
    }
    return res.status(200).json({ success: true, msg: "Login successful", data: wholeseller });
  } catch (error) {
    console.log("Error in login controller:", error);
    return res.status(500).json({ success: false, msg: "Internal server error" });
  }
}













module.exports = {
    postProduct,
    getProductByName,
    getAllProducts,
    rentProduct,
    registerWholeseller,
    getAllWholeSellers,
    loginWholeSeller
};
