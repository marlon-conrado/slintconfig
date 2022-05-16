/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

// eslint-disable-next-line import/no-default-export
export default {
  moduleFileExtensions: ['js', 'json'],
  rootDir: './src',
  testRegex: '.*\\.spec\\.js$',
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
