require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-ethers");
require('dotenv').config();


const { PRIVATE_KEY } = process.env;

const networks = {
  hardhat: {},
  polygon: {
    url: 'https://polygon-mumbai.infura.io/v3/d16ffb50267642719e1d148a453976e9',
    accounts: [`0x${PRIVATE_KEY}`]
  },
  // mainnet: {
  //   url: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID',
  //   accounts: [`0x${PRIVATE_KEY}`]
  // },
  // Add more networks as needed
};

module.exports = {
  solidity: "0.8.0",
  networks: networks
};
