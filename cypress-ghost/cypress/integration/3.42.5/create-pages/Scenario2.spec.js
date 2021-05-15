/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PagesPage from "../pageObjects/PagesPage";
import PagesListPage from "../pageObjects/PagesListPage";

context("Create Page - ", () => {
  beforeEach(() => {
    cy.login('3.42.5');
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

  it("fills pages fields and publish", () => {
    MenuPage.getPagesLink().click();
    cy.wait(5000);
    PagesListPage.getLastDraftPageTitle().click({ force: true });
    cy.wait(5000);
    cy.url().should("include", "ghost/#/editor/page");
    PagesPage.getTitleField().clear().type("Test page #2");
    PagesPage.getPageUnformattedContentField().type("Test content #2");
    PagesPage.getPublishMenu().click();
    // cy.wait(5000);
    PagesPage.getSetItLiveOption().click();
    PagesPage.getPublishButton().click();
    cy.wait(5000);
  });
});
