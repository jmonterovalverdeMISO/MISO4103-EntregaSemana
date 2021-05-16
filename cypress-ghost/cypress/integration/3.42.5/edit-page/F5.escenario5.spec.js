/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PostsPage from "../pageObjects/PostsPage";
import PostListPage from "../pageObjects/PostListPage";

context("Edit Page - ", () => {
  beforeEach(() => {
    cy.login('3.42.5');
  });

  it("Edit Page - Title - Description", () => {
    cy.url().should("include", "ghost/#/site");
    MenuPage.getPagesLink().click();
    if (cy.get('span:contains("Published")')) {
      PostListPage.getLastPublishedPostTitle().first().click({ force: true });
      PostsPage.getTitleField().dblclick({ force: true });
      PostsPage.getTitleField().clear();
      PostsPage.getTitleField().type("Test #5 Edit Page {enter}");
      PostsPage.getDescriptionField().dblclick({ force: true });
      PostsPage.getDescriptionField().clear();
      PostsPage.getDescriptionField().type("Test #5 Edit Page {enter}");
      PostsPage.getPublishMenu().click();
      PostsPage.getPublishButton().click();
      cy.wait(1500)
      PostsPage.getBackToPagesButton().click();
      PostListPage.getLastPublishedPostTitle().should(
        "contain.text",
        "Test #5 Edit Page"
      );
    } else {
      cy.get('span:contains("Published")').should("not.exist");
    }
  });
});
