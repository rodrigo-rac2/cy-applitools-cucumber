/// <reference types="@applitools/eyes-cypress" />

class DiagnosticsPage {
    static visit() {
        cy.visit('https://manage-status.dev.goodpractice.cloud/#/dev1/login')
    }
    static assertPageLoaded() {
        cy.title().should('include', 'GoodPractice health check')
        cy.contains('Helix', { timeout: 30000 }).should('be.visible')
        cy.contains('GoodPractice Toolkit', { timeout: 30000 }).should('be.visible')
        cy.contains('Towards Maturity Healthcheck', { timeout: 30000 }).should('be.visible')
        cy.contains('helix.dev.goodpractice.cloud', { timeout: 30000 }).should('be.visible')
        cy.contains('Images Server', { timeout: 30000 }).should('be.visible')
        cy.contains('Content Management System', { timeout: 30000 }).should('be.visible')
        cy.contains('API Backend Services', { timeout: 30000 }).should('be.visible')
        cy.contains('Toolkit Weekly Email System', { timeout: 30000 }).should('be.visible')
        cy.wait(5000);
    }
    static assertStatusisOK(status) {
        cy.contains(status, { timeout: 30000 }).should('be.visible')
        cy.wait(5000);
    }
}

export default DiagnosticsPage;