/// <reference types="@applitools/eyes-cypress" />

import DiagnosticsPage from '../../../support/pages/DiagnosticsPage'

/* global Given, Then, When */

before(() => {
    cy.eyesOpen({
        appName: Cypress.env('appName'),
        testName: 'Scenario: Diagnostics',
    })
})

When("I access the environment monitoring URL", () => {
    DiagnosticsPage.visit();
    DiagnosticsPage.assertPageLoaded();
    cy.eyesCheckWindow({
        tag: 'Diagnostics screen',
        target: 'window',
        fully: true,
    });
    cy.eyesClose();
})


Then("the environment status should read {string}", (status) => {
    //return true
    DiagnosticsPage.assertStatusisOK(status);
})
