/// <reference types="@applitools/eyes-cypress" />

import MainPage from './MainPage';

const LOGIN_FIELD = '#login-username';
const PASS_FIELD = '#login-password';
const LOGIN_BUTTON = '#sign-in-button';

class LoginPage {
    static visit() {
        cy.visit(Cypress.config('baseUrl'));
    }

    static typeLogin(query) {
        cy.get(LOGIN_FIELD, { timeout: 10000 }) // 2 seconds
            .type(query);
    }

    static typePassword(query) {
        cy.get(PASS_FIELD, { timeout: 10000 }) // 2 seconds
            .type(query);
    }

    static pressLogin() {
        cy.get(LOGIN_BUTTON, { timeout: 10000 }).click();
        return new MainPage();
    }

    static assertPageLoaded() {
        cy.get(LOGIN_BUTTON, { timeout: 20000 }).should('be.visible');
        cy.contains('support@goodpractice.com', { timeout: 20000 }).should('be.visible');
        cy.wait(5000);
    }
}

export default LoginPage;