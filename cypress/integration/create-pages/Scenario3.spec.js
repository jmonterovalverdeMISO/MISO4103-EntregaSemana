/// <reference types='cypress' />
import MenuPage from '../../pageObjects/MenuPage'
import PagesPage from '../../pageObjects/PagesPage'
import PagesListPage from '../../pageObjects/PagesListPage'

context('Create Page - ', () => {
  beforeEach(() => {
    cy.login()
  })

  it('creates pages', () => {
    cy.url().should('include', 'ghost/#/site')
    MenuPage.getPagesLink().click()
    cy.wait(5000)
    cy.url().should('include', 'ghost/#/pages')
    PagesPage.getNewPageButton().click()
    cy.url().should('include', 'ghost/#/editor/page')
    PagesPage.getTitleField().click()
    PagesPage.getBackToPagesPageButton().click()
    cy.wait(5000)
  })

  it('fills pages fields and publish scheduled ', () => {
	MenuPage.getPagesLink().click()
    cy.wait(5000)
    PagesListPage.getLastDraftPageTitle().click({force: true})
    cy.wait(5000)
    cy.url().should('include', 'ghost/#/editor/page')
    PagesPage.getTitleField().clear().type('Test page #3')
    PagesPage.getPageUnformattedContentField().type('Test content #3')
    PagesPage.getPublishMenu().click()
    cy.wait(5000)
    PagesPage.getPublishLaterOption().click()
    PagesPage.getScheduleButton().click()
  })
})
