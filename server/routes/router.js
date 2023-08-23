const controller = require('../controllers/login');
const express = require("express");
const router = express.Router();
const marketplace = require('../controllers/marketplace')
const wholeSeller = require("../controllers/wholeSeller")
const multer = require("multer");
const contract = require("../controllers/contractor")
const upload = multer({ storage: wholeSeller.storage });
const otpController = require("../controllers/otpController");


// Get Routes
router.get("/getUser/:id", controller.getUserController);
router.get("/getproduct/", marketplace.getAllProducts);
router.get("/getproduct/:slug", marketplace.getProductByName);
router.get("/getwholesellers", wholeSeller.getAllWholeSellers);
router.get("/getproducts", wholeSeller.getProduct);
router.get("/getfarmer", controller.getAllFarmers);
router.get("/getcontracts", contract.getAllContracts);


// Post Routes
router.post("/login", controller.loginController);
router.post("/register", controller.registerController);
router.post("/product/rent", marketplace.rentProduct);
router.post("/wholeseller/register", wholeSeller.registerWholeseller);
router.post("/loginwholeseller", wholeSeller.loginWholeSeller);
router.post("/wholeseller/postproduct", upload.single('image'), wholeSeller.postProduct);
router.post("/contract/post", contract.postContract);
router.post("/contract/approvebyfpo", contract.approveFPO);
router.post("/contract/approvebyservice", contract.approveServiceProvider);
router.post("/otp",otpController.VerifyOtp);



//Put Routes
router.put("/contract/increasestatus", contract.increaseStatus);



//Delete Routes




module.exports = router;