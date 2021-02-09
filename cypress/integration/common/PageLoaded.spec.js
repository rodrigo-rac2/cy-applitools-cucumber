/// <reference types="@applitools/eyes-cypress" />

import LoginPage from "../../support/pages/LoginPage";
 
Given('I am logged in and can see the main page', () => {
  LoginPage.visit();
  LoginPage.assertPageLoaded();
  LoginPage.typeLogin(Cypress.env('test_user'));
  LoginPage.typePassword(Cypress.env('test_pass'));
  LoginPage.pressLogin();
})

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})