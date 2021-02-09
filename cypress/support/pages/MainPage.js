/// <reference types="@applitools/eyes-cypress" />

const menuTop = '#nav-open-btn'
const innerWrapper = '#inner-wrap'

// const spotlightContent0 = '#qa-spotlight-content0'
// const spotlightContent1 = '#qa-spotlight-content1'
// const spotlightContent2 = '#qa-spotlight-content2'
// const spotlightContent3 = '#qa-spotlight-content3'
// const spotlightContent4 = '#qa-spotlight-content4'

// const activityFeedContent0 = '#qa-activityfeed-content0'
// const activityFeedContent1 = '#qa-activityfeed-content1'
// const activityFeedContent2 = '#qa-activityfeed-content2'
// const featuredContent0 = '#qa-featured-content0'
// const featuredContent1 = '#qa-featured-content1'
// const featuredContent2 = '#qa-featured-content2'
// const featuredContent3 = '#qa-featured-content3'
// const featuredContent4 = '#qa-featured-content4'
// const featuredContent5 = '#qa-featured-content5'
// const featuredContent6 = '#qa-featured-content6'
// const mostpopularContent0 = '#qa-mostpopular-content0'
// const mostpopularContent1 = '#qa-mostpopular-content1'

// const btnBrowseAll_spotlight = '#btn-spotlight-browseAll'
// const btnBrowseAll_activityfeed = '#btn-activityfeed-browseAll'
// const btnBrowseAll_featured = '#btn-featuredcontent-browseAll'
// const btnBrowseAll_mostpopular = '#btn-mostpopular-browseAll'


class MainPage {
    constructor() {}
    assertPageLoaded() {
        cy.get(menuTop, { timeout: 30000 }).should('be.visible');
        cy.get(innerWrapper, { timeout: 30000 }).should('be.visible');
        cy.get('.footer-align', { timeout: 50000 }).eq(1).should('be.visible');
        cy.contains('Recommended for you', { timeout: 20000 }).should('be.visible');
        cy.contains('Next', { timeout: 50000 }).should('be.visible');
        cy.wait(5000);
    }
}

export default MainPage;