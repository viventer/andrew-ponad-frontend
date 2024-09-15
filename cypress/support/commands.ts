/// <reference types="cypress" />
import "cypress-file-upload";

Cypress.Commands.add("getDataTest", (dataTestValue) => {
  return cy.get(`[data-test=${dataTestValue}]`);
});
