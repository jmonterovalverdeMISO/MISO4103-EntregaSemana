/// <reference types='cypress' />
import MenuPage from "../../pageObjects/MenuPage";
import PagesPage from "../../pageObjects/PagesPage";
import PagesListPage from "../../pageObjects/PagesListPage";

context("Create Page - ", () => {
  beforeEach(() => {
    cy.login();
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
    PagesPage.getTitleField().clear().type("Test page #4");
    PagesPage.getPageUnformattedContentField().type("Test content #4");
    PagesPage.getHearderStatusLabel().click();
    cy.wait(5000);
    PagesPage.getHearderStatusLabel().should("contain.text", "Draft");
    PagesPage.getBackToPagesPageButton().click();
    cy.url().should("include", "ghost/#/pages");
  });

  it("Delete some drafts pages", () => {
    MenuPage.getPagesLink().click();
    cy.wait(5000);
    PagesListPage.getLastDraftPageTitle().click({ force: true });
    cy.wait(5000);
    cy.url().should("include", "ghost/#/editor/page");
    PagesPage.getPostSettingsButton().click();
    PagesPage.getDeleteButtonPage().contains("Delete").click();
    PagesPage.getAcceptDeleteButtonPage()
      .contains("Delete")
      .click({ force: true });
    cy.wait(5000);
  });
});
