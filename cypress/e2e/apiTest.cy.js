/// <reference types="cypress"/>
const body = require("../fixtures/userApi.json");
const updateBody = require("../fixtures/updateUserApi.json");

describe('API tests', () => {
  it('Add new user', () => {
    cy.addUser(body)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('Update user', () => {
    cy.addUser(body);
    cy.updateUser(body.id, updateBody)
      .then((response) => {
        expect(response.status).eq(200);
    });
  });

  it.skip('Delete user', () => {
    
  });
});