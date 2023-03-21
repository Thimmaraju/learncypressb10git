const { defineConfig } = require("cypress");

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    "baseUrl": "https://opensource-demo.orangehrmlive.com",
    "chromeWebSecurity":false,
    "viewportWidth":1920,
    "viewportHeight" :1080,
    "defaultCommandTimeout":4000, //4000
    "pageLoadTimeout": 120000, //60000
    "requestTimeout": 10000,
    "projectId": "ds23uh",
    "specPattern":"**/*.feature",
    "env":{

         "clienturl": "https://rahulshettyacademy.com/seleniumPractise/#/",
         "username" : "Admin",
         "Password" : "admin123"
    },
   // "retries": { "runMode": 4, "openMode": 1 },
    "video":true,
    "videoCompression": 20,
    //"videosFolder": "cypress/raju",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
      require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
