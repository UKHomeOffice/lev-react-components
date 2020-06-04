// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const path = require('path');

module.exports = {

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    path.resolve('./test/**/?(*.)+(spec|test).[tj]s?(x)')
  ],

  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/test/svg-transformer.js'
  }

};
