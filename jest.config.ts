module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    // '^.+\\.(ts|tsx)$': "<rootDir>/node_modules/babel-jest",
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    // '^.+\\.(ts|tsx|js|jsx)$': ['<rootDir>/node_modules/babel-jest', { configFile: './babel.config.mjs' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
}