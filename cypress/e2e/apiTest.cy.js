/// <reference types="cypress"/>
const body = require("../fixtures/userApi.json");
const updateBody = require("../fixtures/updateUserApi.json");

describe('API tests', () => {
  it('Add new user', () => {
    cy.addUser(body)
      .then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
      });
  });

  it('Update user', () => {
    cy.addUser(body);
    cy.updateUser(body.username, updateBody)
      .then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).eq(200);
      });
  });

  it('Delete user', () => {
    cy.addUser(body);
    cy.deleteUser(body.username)
      .then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).eq(200)
      });
  });

});