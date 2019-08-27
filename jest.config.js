module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/config/jest/jest.beforeEach.ts', '<rootDir>/src/config/jest/jest.afterAll.ts'],
  globalSetup: '<rootDir>/src/config/jest/jest.beforeAll.ts',
  coverageReporters: ['lcov', 'text'],
  bail: true,
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -10,
    },
  },
};
