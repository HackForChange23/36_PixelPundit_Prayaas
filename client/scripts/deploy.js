const hre=require("hardhat");

async function main(){
  const fundme  = await hre.ethers.getContractFactory("Loan");
  const contract = await fundme.deploy();

  await contract.deployed();
  console.log("ADDRESS OF CONTRACT:",contract.address)
}

main().catch((error)=>{
  console.error(error);
  process.exitCode=1;
})
