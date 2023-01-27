/// <reference types="cypress"/>
const body = require("../fixtures/userApi.json");

describe('API tests', () => {
  it.only('Add new user', () => {
    cy.addUser(body)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('Update user', () => {
    
  });

  it('Delete user', () => {
    
  });
});