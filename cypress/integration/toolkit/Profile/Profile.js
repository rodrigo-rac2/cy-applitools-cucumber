/// <reference types="@applitools/eyes-cypress" />

import ProfilePage from '../../../support/pages/ProfilePage'

/* global Given, Then, When */

before(() => {
    cy.eyesOpen({
        appName: Cypress.env('appName'),
        testName: 'Scenario: My Profile',
    })
})

When("I access My Profile page", () => {
    ProfilePage.visit();
    ProfilePage.assertPageLoaded();
})


Then("I can see my personal details", () => {
    ProfilePage.assertDetailsDisplayed(
        Cypress.env('test_name'),
        Cypress.env('test_email')
    );
    cy.eyesCheckWindow({
        tag: 'My Profile screen',
        target: 'window',
        fully: true,
    });
})

after(() => {
    cy.eyesClose();
})