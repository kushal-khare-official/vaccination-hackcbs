const HDWalletProvider = require('@truffle/hdwallet-provider')

const fs = require('fs')
const mnemonic = fs.readFileSync('.secret').toString().trim()

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    matic: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://matic-mumbai.chainstacklabs.com/`,
        ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  mocha: {},
  compilers: {
    solc: {
      version: '^0.8.0',
    },
  },
  db: {
    enabled: false,
  },
}
