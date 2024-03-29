/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  moduleFileExtensions: ['js', 'json'],
  rootDir: './src',
  testRegex: '.*\\.test\\.js$',
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  testResultsProcessor: 'jest-sonar-reporter',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
    '^.*\\.module\\.[jt]sx?$',
    '^constants\\.[jt]sx?$',
  ],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 60,
      lines: 50,
    },
  },
};
