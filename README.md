How to use this sample hardhat project ? 

- Put the smart contract into /contracts/NFT.sol
- Add your private key in the hardhat.config.js
- npx hardhat compile
- put into hardhat.config.js your chain id and other informations
- npx hardhat run --network bsctestnet scripts/deploy.js

Yeah ! You're done ! Now, how to verify you're code ?

- Put in hardhat.config.js your apiKey in secrets.json (in this exemple, we use BSC Testnet API)
- npx hardhat clean
- npx hardhat verify --network bsctesnet (or other network) CONTRACT_ADDRESS "https://shdw-drive.genesysgo.net/3mZB1usfY48wcjBqo16kJea4ApgQc4jeQWxpWfFH1XtJ/" 