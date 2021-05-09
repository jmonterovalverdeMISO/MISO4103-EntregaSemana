/// <reference types='cypress' />
import MenuPage from "../../pageObjects/MenuPage";
import PostsPage from "../../pageObjects/PostsPage";
import PostsListPage from "../../pageObjects/PostListPage";

context("Edit Post - ", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Edit Posts - Title", () => {
    cy.url().should("include", "ghost/#/site");
    MenuPage.getPostsLink().click();
    if (cy.get('span:contains("Published")')) {
      PostsListPage.getLastPublishedPostTitle().first().click({ force: true });
      PostsPage.getTitleField().dblclick({ force: true });
      PostsPage.getTitleField().clear();
      PostsPage.getTitleField().type("Test #3 Edit {enter}");
      PostsPage.getPublishMenu().click();
      PostsPage.getPublishButton().click();
      PostsPage.getBackToPostsPageButton().click();
      PostsListPage.getLastPublishedPostTitle().should(
        "contain.text",
        "Test #3 Edit"
      );
    } else {
      cy.get('span:contains("Published")').should("not.exist");
    }
  });
});
