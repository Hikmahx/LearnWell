module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  };