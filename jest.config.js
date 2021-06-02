module.exports = {
  bail: true,
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}
