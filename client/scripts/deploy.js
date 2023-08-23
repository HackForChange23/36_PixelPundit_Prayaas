const hre=require("hardhat");

//ADDRESS OF CONTRACT: 0x3f1defbD01a839763ba625191860430a2c57c406

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
