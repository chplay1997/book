module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch:
    process.env.NODE_ENV === 'development'
      ? ['<rootDir>/src/instrumental/*.{spec,test}.{js,jsx,ts,tsx}']
      : ['<rootDir>/src/next/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/next/*.{spec,test}.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/config/jest/babelTransform.js',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
    '/node_modules/?!ky/distribution',
  ],
  modulePaths: ['<rootDir>/src'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '@/(.*)$': '<rootDir>/src/next/$1',
  },
  moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  // "resetMocks": true,
  globals: {
    navigator: {},
    window: {
      getComputedStyle: () => jest.fn(),
      matchMedia: () => jest.fn(),
    },
    localStorage: {},
    location: {
      search: '',
    },
  },
}
