/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',

  // Tell Jest where our tests + source live
  roots: ['<rootDir>/demo', '<rootDir>/src'],

  // Compile TS on the fly with ts-jest (v26 style)
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },

  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
      diagnostics: true,
      isolatedModules: true,
    },
  },

  // Allow importing .json test fixtures and .ts with “.js” endings
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};