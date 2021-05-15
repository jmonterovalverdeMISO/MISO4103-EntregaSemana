/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PagesPage from "../pageObjects/PagesPage";
import PagesListPage from "../pageObjects/PagesListPage";

context("Edit Post - ", () => {
  beforeEach(() => {
    cy.login('3.42.5');
  });

  it("Edit Posts - Title", () => {
    cy.url().should("include", "ghost/#/site");
    MenuPage.getPostsLink().click();
    if (cy.get('span:contains("Published")')) {
      PostListPage.getLastPublishedPostTitle().first().click({ force: true });
      PostsPage.getTitleField().dblclick({ force: true });
      PostsPage.getTitleField().clear();
      PostsPage.getTitleField().type("Test #3 Edit {enter}");
      PostsPage.getPublishMenu().click();
      PostsPage.getPublishButton().click();
      PostsPage.getBackToPostsPageButton().click();
      PostListPage.getLastPublishedPostTitle().should(
        "contain.text",
        "Test #3 Edit"
      );
    } else {
      cy.get('span:contains("Published")').should("not.exist");
    }
  });
});
