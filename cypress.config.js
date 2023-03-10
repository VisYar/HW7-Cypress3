const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		projectId: "z49zox",
    baseUrl: "https://petstore.swagger.io/v2",
    include: "cypress/e2e/apiTest/*.cy.{js,jsx,ts,tsx}",
    retries: {
      openMode: 0,
    },
  },
});
