/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PostsPage from "../pageObjects/PagesPage";
import PostListPage from "../pageObjects/PagesListPage";

context("Edit Post - ", () => {
  beforeEach(() => {
    cy.login('3.42.5');
  });

  it("Edit Posts - Draft", () => {
    cy.url().should("include", "ghost/#/site");
    MenuPage.getPostsLink().click();
    if (cy.get('span:contains("Draft")')) {
      PostListPage.getLastDraftPostTitle().first().click({ force: true });
      PostsPage.getTitleField().dblclick({ force: true });
      PostsPage.getTitleField().clear();
      PostsPage.getTitleField().type("Test #2 Edit {enter}");
      PostsPage.getDescriptionField().dblclick({ force: true });
      PostsPage.getDescriptionField().clear();
      PostsPage.getDescriptionField().type("Test #2 Edit {enter}");
      PostsPage.getPublishMenu().click();
      PostsPage.getPublishButton().click();
      cy.wait(1500)
      PostsPage.getBackToPostsPageButton().click();
      PostListPage.getLastPublishedPostTitle().should(
        "contain.text",
        "Test #2 Edit"
      );
    } else {
      cy.get('span:contains("Draft")').should("not.exist");
    }
  });
});
