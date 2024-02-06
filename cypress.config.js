const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  viewportHeight: 880,
  viewportWidth: 1280,
  video: true,
  videoCompression: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
