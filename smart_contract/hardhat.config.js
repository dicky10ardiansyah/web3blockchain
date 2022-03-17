// https://eth-ropsten.alchemyapi.io/v2/ytl7YZmmnzKGtFTKvYSkgApa-MLtHS1h

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ytl7YZmmnzKGtFTKvYSkgApa-MLtHS1h',
      accounts: ['2440274203b8d898e41ccc81cd7ba6bfa3f60b0f72b54692c76b4423883f0619']
    }
  }
}