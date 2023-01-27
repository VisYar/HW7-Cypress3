const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://petstore.swagger.io",
    include: "cypress/e2e/apiTest/*.cy.{js,jsx,ts,tsx}",
    retries: {
      openMode: 0,
    },
  },
});