/// <reference types="@applitools/eyes-cypress" />

/* global Given, Then, When */
import MainPage from '../../../support/pages/MainPage'
import LoginPage from '../../../support/pages/LoginPage'
let mainPage = new MainPage()

before(() => {
    cy.eyesOpen({
        appName: Cypress.env('appName'),
        testName: 'Scenario: Login Page',
    })
})

Given("I access login url", () => {
    LoginPage.visit();
    LoginPage.assertPageLoaded();
    cy.eyesCheckWindow({
        tag: 'Login screen',
        target: 'window',
        fully: true,    
    });    
})

When("I enter valid credentials", () => {
    LoginPage.typeLogin(Cypress.env('test_user'));
    LoginPage.typePassword(Cypress.env('test_pass'));
})

When("I click the sign in button", () => {
    mainPage = LoginPage.pressLogin();
})

Then("I succesfully log in", () => {
    mainPage.assertPageLoaded();
    cy.eyesCheckWindow({
        tag: 'Toolkit main page',
        target: 'window',
        fully: true,    
    });
})

after(() => {
    cy.eyesClose()
})