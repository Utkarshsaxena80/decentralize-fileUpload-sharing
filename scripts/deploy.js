const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  await upload.waitForDeployment();
  //console.log(upload);

  console.log("uploaded to : ",upload.target);
}

main().then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})