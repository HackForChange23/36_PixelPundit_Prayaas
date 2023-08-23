const WholesellerMarket = require("../models/wholeSellerMarketPlace")
const Wholeseller = require("../models/wholeseller")
const bcrypt = require("bcrypt")
const path = require('path')
const multer = require('multer');

function convertToSlug(str) {
    const slug = str.replace(/\s+/g, '-');
    const lowercaseSlug = slug.toLowerCase();
    return lowercaseSlug;
}

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

const getProduct = async (req, res) => {

    try {
      const reqQuery = {...req.query};
      const removeFields = ['select', 'sort', 'limit', 'page'];
      removeFields.forEach(param => delete reqQuery[param]);
  
      let queryStr = JSON.stringify(reqQuery);
      queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
      query = WholesellerMarket.find(JSON.parse(queryStr));
      
  
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
      const total = await WholesellerMarket.countDocuments(query);
  
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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const productSlug = convertToSlug(req.body.name);
      const destinationPath = path.join("imgs", "wholeSeller", "marketplace", "product", productSlug);
      if (!fs.existsSync(destinationPath)) {
        fs.mkdirSync(destinationPath, { recursive: true });
      }
      cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
      const pathName = Date.now() + path.extname(file.originalname);
      cb(null, pathName);
      req.imageName = pathName;
    }
});

const upload = multer({ storage: storage });

const postProduct =  async (req, res) => {
  try {
    const productData = req.body;
    const {name, farmer, cost, minimumQuantity, image} =req.body
    const existingProduct = await WholesellerMarket.findOne({ name: productData.name });

    if (existingProduct) {
      return res.status(401).json({ success: false, msg: "Product already exists" });
    }
    
    const newProduct = new Product({
      name, farmer, cost, minimumQuantity, image,
      slug: convertToSlug(productData.name),
      image: req.imageName
    });

    await newProduct.save();
    console.log(`Product '${productData.name}' listed successfully`);
    
    return res.status(200).json({ success: true, msg: "Product listed successfully" });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ success: false, msg: error.message });
  }
};











module.exports = {
    registerWholeseller,
    getAllWholeSellers,
    loginWholeSeller,
    getProduct,
    storage,
    postProduct
};
