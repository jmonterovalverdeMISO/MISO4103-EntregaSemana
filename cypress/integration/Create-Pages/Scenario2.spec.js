/// <reference types='cypress' />
import MenuPage from '../PageObjects/MenuPage';
import PagesPage from '../PageObjects/PagesPage';
import PagesListPage from '../PageObjects/PagesListPage';

context('Create Page - ', () => {
  const menuPage = new MenuPage();
  const pagesPage = new PagesPage();
  const pagesListPage = new PagesListPage();

  beforeEach(() => {
    cy.Login('jc.dazam1@uniandes.edu.co', 'uniandes1234')
  });


  it('creates pages', () => {
    cy.url().should('include', 'ghost/#/site')
    menuPage.getPagesLink().click()
    cy.wait(5000)
    cy.url().should('include', 'ghost/#/pages')
    pagesPage.getNewPageButton().click()
    cy.url().should('include', 'ghost/#/editor/page')
    pagesPage.getTitleField().click()
    pagesPage.getBackToPagesPageButton().click()
    cy.wait(5000)
  });

  it('fills pages fields and publish', () => {
	menuPage.getPagesLink().click()
    cy.wait(5000)
    pagesListPage.getLastDraftPageTitle().click({force: true})
    cy.wait(5000)
    cy.url().should('include', 'ghost/#/editor/page')
    pagesPage.getTitleField().clear().type('Test page #2')
    pagesPage.getPageUnformattedContentField().type('Test content #2')
    pagesPage.getPublishMenu().click()
    cy.wait(5000)
    pagesPage.getSetItLiveOption().click()
    pagesPage.getPublishButton().click()
    cy.wait(5000)
   
  });
});
