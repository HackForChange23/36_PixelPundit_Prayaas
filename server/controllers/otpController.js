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

const sendOtp = async (req, res) => {
  const { contact_no } = req.body;

  const accountSid = "AC124b8b9b6c33cdc655bc0b13e137d045";
  const verifySid = "VAddfe3285d4ab98463a9d7a64830790c1";
  const client = require("twilio")(accountSid, "bff60ffee47b98894c1ad4b4ecf614d4");

  try {
    const verification = await client.verify.v2.services(verifySid).verifications.create({
      to: contact_no,
      channel: "sms"
    });
    console.log(verification.status);
    // Send a response indicating success or failure
    res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    // Send an error response
    res.status(500).json({ success: false, message: "Error sending OTP" });
  }
};



const verifyOtp = async (req, res) => {
  const { contact_no, otpCode } = req.body;

  const accountSid = "AC124b8b9b6c33cdc655bc0b13e137d045";
  const verifySid = "VAddfe3285d4ab98463a9d7a64830790c1";
  const client = require("twilio")(accountSid, "bff60ffee47b98894c1ad4b4ecf614d4");

  try {
    const verification_check = await client.verify.v2.services(verifySid).verificationChecks.create({
      to: contact_no,
      code: otpCode
    });
    console.log(verification_check.status);
    // Send a response indicating success or failure
    res.json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    // Send an error response
    res.status(500).json({ success: false, message: "Error verifying OTP" });
  }
};

module.exports={sendOtp, verifyOtp};
