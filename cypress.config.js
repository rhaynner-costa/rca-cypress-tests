const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  viewportHeight: 880,
  viewportWidth: 1280,
  video: true,
  videoCompression: true,
  retries: 1,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'test-report',
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    ignoreVideos: true,
    videoOnFailOnly: false,
    quiet: false,
    timestamp: 'mmddyyyy_HHMMss',
    overwrite: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here

    },
  },
});
