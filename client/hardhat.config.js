require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_URL="https://sepolia.infura.io/v3/d923d1f93e4f4c24ba7fde6d81abc4ff";
const PRIVATE_KEY="7fd22d5f5ffab0365bd07fc026a87f923713ac87b1e8afa3ee1c9e4d6454ad5f";

module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url:SEPOLIA_URL,
      accounts:[PRIVATE_KEY]
    },
  },
};
