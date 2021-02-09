/// <reference types="@applitools/eyes-cypress" />

class ProfilePage {
    static visit() {
        cy.visit('https://app.dev.goodpractice.cloud/#/dev1/profile')
    }
    static assertPageLoaded() {
        cy.contains('My Profile', { timeout: 30000 }).should('exist')
        cy.contains('Personal Details', { timeout: 30000 }).should('be.visible')
        cy.contains('Consent Notice', { timeout: 30000 }).should('be.visible')
        cy.contains('Your Data', { timeout: 30000 }).should('be.visible')
        cy.contains('Talk to us', { timeout: 30000 }).should('be.visible')
        cy.contains('Privacy Notice', { timeout: 30000 }).should('be.visible')

    }
    static assertDetailsDisplayed(name, email) {
        cy.contains(name, { timeout: 30000 }).should('be.visible')
        cy.contains(email, { timeout: 30000 }).should('be.visible')
        cy.wait(5000);
    }
}

export default ProfilePage;