const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    screenshotOnRunFailure: false,
    baseUrl: 'https://automationexercise.com',
    testIsolation: false, 
    specPattern: [
      'cypress/e2e/interface/*.cy.ts'
    ]
  },
});
