/// <reference types='cypress' />
import MenuPage from "../../pageObjects/MenuPage";
import PagesPage from "../../pageObjects/PagesPage";
import PagesListPage from "../../pageObjects/PagesListPage";

context("Create Page - ", () => {
  beforeEach(() => {
	//cy.login();
    cy.login('jc.dazam1@uniandes.edu.co', 'uniandes1234')
  });

  it("creates pages", () => {
    cy.url().should("include", "ghost/#/site");
    MenuPage.getPagesLink().click();
    cy.wait(5000);
    cy.url().should("include", "ghost/#/pages");
    PagesPage.getNewPageButton().click();
    cy.url().should("include", "ghost/#/editor/page");
    PagesPage.getTitleField().click();
    PagesPage.getBackToPagesPageButton().click();
    cy.wait(5000);
  });

  it("fills pages fields", () => {
    MenuPage.getPagesLink().click();
    cy.wait(5000);
    PagesListPage.getLastDraftPageTitle().click({ force: true });
    cy.wait(5000);
    cy.url().should("include", "ghost/#/editor/page");
    PagesPage.getTitleField().clear().type("Test page #5");
	cy.get('.koenig-plus-menu-button.flex.justify-center items-center.relative.w9.h9.ba.b--midlightgrey-l2 bg-white.br-100.anim-normal').click();
  });
});
