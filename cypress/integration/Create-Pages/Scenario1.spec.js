/// <reference types='cypress' />
import MenuPage from '../PageObjects/MenuPage'
import PagesPage from '../PageObjects/PagesPage'
import PagesListPage from '../PageObjects/PagesListPage'

context('Create Page - ', () => {
  const menuPage = new MenuPage()
  const pagesPage = new PagesPage()
  const pagesListPage = new PagesListPage()

  beforeEach(() => {
    cy.Login('jc.dazam1@uniandes.edu.co', 'uniandes1234')
  })

  it('creates draft pages', () => {
    cy.url().should('include', 'ghost/#/site')
    menuPage.getPagesLink().click()
    cy.wait(5000)
    cy.url().should('include', 'ghost/#/pages')
    pagesPage.getNewPageButton().click()
    cy.url().should('include', 'ghost/#/editor/page')
    pagesPage.getTitleField().click()
    pagesPage.getBackToPagesPageButton().click()
    cy.wait(5000)
  })

  it('fills pages fields and update information page', () => {

	menuPage.getPagesLink().click()
    cy.wait(5000)
    pagesListPage.getLastDraftPageTitle().click({force: true})
    cy.wait(5000)
    cy.url().should('include', 'ghost/#/editor/page')
    pagesPage.getTitleField().clear().type('Test page #1')
    pagesPage.getPageUnformattedContentField().type('Test content #1')
    pagesPage.getHearderStatusLabel().click()
    cy.wait(5000)
    pagesPage.getHearderStatusLabel().should('contain.text', 'Draft')
    pagesPage.getBackToPagesPageButton().click()
    cy.url().should('include', 'ghost/#/pages')
    pagesListPage.getLastDraftPageTitle().should('contain.text', 'Test page #1')
  })
})



