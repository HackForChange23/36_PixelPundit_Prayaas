const Farmer = require("../models/farmer")
const Manager = require("../models/manager")
const bcrypt = require("bcrypt")

function generateRandomNumber() {
    return Math.floor(Math.random() * 1000000);
  }
  
function generateDynamicId(role) {
    const prefix = '';
    switch (role) {
      case 'farmer':
        prefix = 'FAM';
        break;
      case 'FPO manager':
        prefix = 'FPM';
        break;
      case 'Service provider':
        prefix = 'Spv';
        break;
      default:
        throw new Error('Invalid role');
    }
    return `${prefix}${generateRandomNumber()}`;
  }




  async function loginController(req, res) {
    const { contact_no, password } = req.body;
  
    try {
      let user = await Farmer.findOne({ contact_no }).exec();
      if (!user) {
        let user1 = await Manager.findOne({ contact_no }).exec();
        if(!user1){
          return res.status(404).send({ error: "Username not Found" });
        }
        else{
          user = user1;
        }
        
      }
  
      const passwordCheck = await bcrypt.compare(password, user.password);
  
      if (!passwordCheck) {
        return res.status(400).send({ error: "Password does not match" });
      }
  
      return res.status(200).send({
        msg: "Login Successful...!",
        username: user.username,
      });
    } catch (error) {
      console.log("Error in login controller:", error);
      return res.status(500).send({ error });
    }
  }

const registerController = async (req, res) => {
    try {
        const { contact_no, name, password, adhaar_no, email, address, role, pin_code, photoPath, pan } = req.body;
      
        if (role == "farmer"){
            const farmer = await Farmer.findOne({pan: pan});
         
            

            if (farmer){
              
                return res.status(400).json({ success: false, msg: "Account already exists !" });
            }
            const zone = req.body.pin_code.toString()[0];
            
            id = "FAM" + generateRandomNumber().toString()
            if (password) {
                const hashPassword = await bcrypt.hash(req.body.password, 10);
                const user = new Farmer({
                    contact_no, name, password: hashPassword, adhaar_no, email : email || "", address, role, pin_code, photoPath, id, zone, pan
                });
                await user.save();
              }
        } 
        else if(role == "fpo_manager"){

            const manager = await Manager.findOne({pan: pan});
            if (manager){
                return res.status(400).json({ success: false, msg: "Account already exists !" });
            }
            let id = "FPM" + generateRandomNumber().toString()
           
            if (password) {
                const hashPassword = await bcrypt.hash(req.body.password, 10);
                const user = new Manager({
                    contact_no, name, password: hashPassword, pan, email : email || "", address, role, pin_code, photoPath, id, adhaar_no
                });
                await user.save();
              }
            
        }
       
        


      
        console.log(`User '${req.body.name}' just Registered`.bold.blue)

        return res.status(200).json({ success: true, msg: "Registration Complete !" });
    } catch (error) {
        console.log(`${error}`.bold.red)
        return res.status(400).json({ success: false, msg: "Some error occurred" });
    }

};


 async function getUserController(req, res) {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(501).send({ error: "Please ender a PrayasId" });
    }
     var user={};

    if(id.slice(0,3) == "FAM"){
       user = await Farmer.findOne({id}).exec();
    }
    else if(id.slice(0,3) == "FPM"){
       user = await Manager.findOne({id}).exec();
    }
    else{
      return res.status(501).send({ error: "Invalid PrayasId" });
    }

    const { password, ...rest } = Object.assign({}, user.toJSON());

    return res.status(201).send(rest);
  } catch (error) {
    console.log("Error in getUser controller:", error);
    return res.status(404).send({ error: "Cannot find user data" });
  }
}


const getAllFarmers = async (req, res) => {

  try {
    const reqQuery = {...req.query};
    const removeFields = ['select', 'sort', 'limit', 'page'];
    removeFields.forEach(param => delete reqQuery[param]);

    let queryStr = JSON.stringify(reqQuery);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
    query = Farmer.find(JSON.parse(queryStr));
    

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
    const total = await Farmer.countDocuments(query);

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

    const farmer = await query;    
    if (!farmer){
        return res.status(401).json({success: false, msg: "No WholeSellers Registered"});
    }   
    return res.status(200).json({success: true, count: total, pagination, data: farmer});    
  } catch (error) {
    console.log(`${error.message} (error)`.red);
    return res.status(400).json({success: false, msg: error.message});
  }
   
};






module.exports = {
    loginController,
    registerController,
    getUserController,
    getAllFarmers
};
