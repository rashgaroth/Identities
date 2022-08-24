import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/2abf317ac68f47b1890e187c552dcdc1",
      accounts: [
        `0x321fd422e8f13e2f73dc428348ec01a8cc1c267ae76214405f4650ebe5b27d3f`,
      ],
      chainId: 80001,
    }
  },
  defaultNetwork: 'hardhat',
  etherscan: {
    apiKey: 'SGYWBESN2STKPVEV9IDQ63WRWG3ZIRJ2T2'
  }
};

export default config;
