module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
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
