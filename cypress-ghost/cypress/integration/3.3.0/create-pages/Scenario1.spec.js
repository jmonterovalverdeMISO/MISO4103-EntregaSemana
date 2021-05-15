/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PagesPage from "../pageObjects/PagesPage";
import PagesListPage from "../pageObjects/PagesListPage";

context("Create Page - ", () => {
  beforeEach(() => {
    cy.login('3.3.0');
  });

  it("creates draft pages", () => {
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

  it("fills pages fields and update information page", () => {
    MenuPage.getPagesLink().click();
    cy.wait(5000);
    PagesListPage.getLastDraftPageTitle().click({ force: true });
    cy.wait(5000);
    cy.url().should("include", "ghost/#/editor/page");
    PagesPage.getTitleField().clear().type("Test page #1");
    PagesPage.getPageUnformattedContentField().type("Test content #1");
    PagesPage.getHearderStatusLabel().click();
    cy.wait(5000);
    PagesPage.getHearderStatusLabel().should("contain.text", "Draft");
    PagesPage.getBackToPagesPageButton().click();
    cy.url().should("include", "ghost/#/pages");
    PagesListPage.getLastDraftPageTitle().should(
      "contain.text",
      "Test page #1"
    );
  });
});
