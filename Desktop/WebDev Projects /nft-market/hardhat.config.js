require("@nomiclabs/hardhat-waffle");
const fs= require('fs');
const privateKey = fs.readFileSync('.secret').toString();
const projectId = "aa0fc68ff73a42ac8afb4c3ea4c999d2";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
  },
  solidity: "0.8.4",
};
