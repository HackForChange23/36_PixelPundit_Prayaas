// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure

// const  VerifyOtp = async(res,req) => {

//     const contact_no = req.body.contact_no;

//     const accountSid = "AC124b8b9b6c33cdc655bc0b13e137d045";
//     const authToken = process.env.TWILIO_TOKEN;
//     const verifySid = "VAddfe3285d4ab98463a9d7a64830790c1";
//     const client = require("twilio")(accountSid, "bff60ffee47b98894c1ad4b4ecf614d4");
    
//     client.verify.v2
//       .services(verifySid)
//       .verifications.create({ to: contact_no, channel: "sms" })
//       .then((verification) => console.log(verification.status))
//       .then(() => {
//         const readline = require("readline").createInterface({
//           input: process.stdin,
//           output: process.stdout,
//         });
//         readline.question("Please enter the OTP:", (otpCode) => {
//           client.verify.v2
//             .services(verifySid)
//             .verificationChecks.create({ to: contact_no, code: otpCode })
//             .then((verification_check) => console.log(verification_check.status))
//             .then(() => readline.close());
//         });
//       });
// }

// const sendOtp = async (req, res) => {
//   const { contact_no } = req.body;

//   const accountSid = "AC124b8b9b6c33cdc655bc0b13e137d045";
//   const verifySid = "VAddfe3285d4ab98463a9d7a64830790c1";
//   const client = require("twilio")(accountSid, "bff60ffee47b98894c1ad4b4ecf614d4");

//   try {
//     const verification = await client.verify.v2.services(verifySid).verifications.create({
//       to: contact_no,
//       channel: "sms"
//     });
//     console.log(verification.status);
//     // Send a response indicating success or failure
//     res.json({ success: true, message: "OTP sent successfully" });
//   } catch (error) {
//     console.error("Error sending OTP:", error);
//     // Send an error response
//     res.status(500).json({ success: false, message: "Error sending OTP" });
//   }
// };



// const verifyOtp = async (req, res) => {
//   const { contact_no, otpCode } = req.body;

//   const accountSid = "AC124b8b9b6c33cdc655bc0b13e137d045";
//   const verifySid = "VAddfe3285d4ab98463a9d7a64830790c1";
//   const client = require("twilio")(accountSid, "bff60ffee47b98894c1ad4b4ecf614d4");

//   try {
//     const verification_check = await client.verify.v2.services(verifySid).verificationChecks.create({
//       to: contact_no,
//       code: otpCode
//     });
//     console.log(verification_check.status);
//     // Send a response indicating success or failure
//     res.json({ success: true, message: "OTP verified successfully" });
//   } catch (error) {
//     console.error("Error verifying OTP:", error);
//     // Send an error response
//     res.status(500).json({ success: false, message: "Error verifying OTP" });
//   }
// };

// module.exports={sendOtp, verifyOtp};


const twilio = require("twilio");
let storedOtp='';

exports.sendOtp = async (req, res) => {
  const phoneNumber = req.body.phoneNumber;

  let digits = '0123456789';
  otp = '';
  for (let i = 0; i < 4; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }

  const accountSid = "AC124b8b9b6c33cdc655bc0b13e137d045";
  const authToken = process.env.TWILIO_TOKEN;
  const client = require("twilio")(accountSid, "bff60ffee47b98894c1ad4b4ecf614d4");

  // Create a Twilio client.
  try{
    await client.messages
    .create({
       body: `Your OTP is ${otp}`,
       from: '+18146215058',
       to: `+91${phoneNumber}`
     })
    .then(message => {
      console.log(message.sid)
    });
  
   
    // Store the OTP in a variable.
    storedOtp = otp;
    console.log(storedOtp);
  
    res.status(201).json({ success: true, msg: "Otp sent sucessfully"});
  }catch(err){
    console.log(err);
    res.status(500).json({ success: false, msg: "Internal server error"});
  }
  
};

exports.verifyOtp = async (req, res) => {
  const otp = req.body.otp;

  // Compare the OTP to the one stored in the variable.
  if (otp === storedOtp) {
    res.status(201).json({ success: true, msg: "Correct otp"});
  } else {
    res.status(401).json({ success: false, msg: "Incorrect otp"});
  }
};
