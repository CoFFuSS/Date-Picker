// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jest-environment-jsdom',
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1',
//   },
//   moduleDirectories: ['node_modules', 'src'],
//   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
//   transform: {
//     '^.+\\.(ts|tsx)?$': 'ts-jest',
//     '^.+\\.(js|jsx)$': 'babel-jest',
//     '^.+\\.svg$': '<rootDir>/src/__mocks__/svgrMock.ts',
//   },
// };

// export {};

export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/src/__mocks__/svgrMock.ts',
  },
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
