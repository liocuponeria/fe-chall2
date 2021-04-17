module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/tests/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  collectCoverageFrom: ['src/components/**/*.{js,jsx,ts,tsx}', 'src/pages/**/*.{js,jsx,ts,tsx}', 'src/stories/**/*'],
  coveragePathIgnorePatterns: ['src/pages/_app.tsx', 'src/pages/_document.tsx', 'src/stories/*'],
  moduleDirectories: ['node_modules', 'src'],
}
