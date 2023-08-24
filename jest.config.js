module.exports = {
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
  ],
  moduleNameMapper: {
    '^.*\\.scss$': '<rootDir>/mocks/styles.ts',
    '^@/(.*)$': '<rootDir>/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/wordings/',
    '<rootDir>/mocks/',
    '<rootDir>/interfaces/',
    '<rootDir>/types/',
    '<rootDir>/hooks/',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/mocks/',
    '<rootDir>/wordings/',
    '<rootDir>/interfaces/',
    '<rootDir>/types/',
    '<rootDir>/hooks/',
  ],
  collectCoverage: true,
  coverageDirectory: './coverage/',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}