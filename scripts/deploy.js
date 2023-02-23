// scripts/deploy.js
async function main() {
  // 1. Get the contract to deploy
  const Token = await ethers.getContractFactory('Sell_item2');
  console.log('Deploying Token...');

  // 2. Instantiating a new Box smart contract
  const token = await Token.deploy("https://shdw-drive.genesysgo.net/3mZB1usfY48wcjBqo16kJea4ApgQc4jeQWxpWfFH1XtJ/");
  console.log("Wait...");

  // 3. Waiting for the deployment to resolve
  await token.deployed();

  // 4. Use the contract instance to get the contract address
  console.log('Token deployed to:', token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
     console.error(error);
     process.exit(1);
  });
