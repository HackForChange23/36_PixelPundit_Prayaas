// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure

const  VerifyOtp = async(res,req) => {
    const accountSid = "AC124b8b9b6c33cdc655bc0b13e137d045";
    const authToken = process.env.TWILIO_TOKEN;
    const verifySid = "VAddfe3285d4ab98463a9d7a64830790c1";
    const client = require("twilio")(accountSid, "bff60ffee47b98894c1ad4b4ecf614d4");
    
    client.verify.v2
      .services(verifySid)
      .verifications.create({ to: "+918657184703", channel: "sms" })
      .then((verification) => console.log(verification.status))
      .then(() => {
        const readline = require("readline").createInterface({
          input: process.stdin,
          output: process.stdout,
        });
        readline.question("Please enter the OTP:", (otpCode) => {
          client.verify.v2
            .services(verifySid)
            .verificationChecks.create({ to: "+918657184703", code: otpCode })
            .then((verification_check) => console.log(verification_check.status))
            .then(() => readline.close());
        });
      });
}

module.exports={VerifyOtp};
