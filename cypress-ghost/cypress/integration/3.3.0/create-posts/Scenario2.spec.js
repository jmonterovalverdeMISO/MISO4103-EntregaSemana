/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PostsPage from "../pageObjects/PagesPage";
import PostListPage from "../pageObjects/PostListPage";

context("Create Post - ", () => {
  beforeEach(() => {
    cy.login('3.3.0');
  });

  it("creates post", () => {
    cy.url().should("include", "ghost/#/site");
    MenuPage.getPostsLink().click();
    cy.wait(5000);
    cy.url().should("include", "ghost/#/posts");
    PostsPage.getNewPostButton().click();
    cy.url().should("include", "ghost/#/editor/post");
    PostsPage.getTitleField().click();
    PostsPage.getTitleField().click();
    PostsPage.getBackToPostsPageButton().click();
    cy.wait(5000);
  });

  it("fills post fields", () => {
    MenuPage.getPostsLink().click();
    cy.wait(5000);
    PostListPage.getLastDraftPost().click({ force: true });
    cy.wait(3000);
    cy.url().should("include", "ghost/#/editor/post");
    PostsPage.getTitleField().clear().type("Test post #2");
    PostsPage.getPostUnformattedContentField().type("Test content #2");
    PostsPage.getPublishMenu().click();
    cy.wait(3000);
    PostsPage.getSetItLiveOption().click();
    PostsPage.getPublishButton().click();
    cy.wait(3000);
    PostsPage.getHearderStatusLabel().should("contain.text", "Published");
    PostsPage.getBackToPostsPageButton().click();
    cy.url().should("include", "ghost/#/posts");
    //this is a workaround given that cypress will break if we use the filtering manu on top of the page
    //due to that menu triggering an API call from a different domain
    PostListPage.getLastPublishedPostTitle().should(
      "contain.text",
      "Test post #2"
    );
  });

  /*it('validates post is on list', () => {
    MenuPage.getPostsLink().click();
    cy.wait(5000);
    cy.url().should('include', 'ghost/#/posts');
     PostsPage.getSortByUpdateDateMenu().click();
     PostsPage.getRecentlyUpdatedMenuOption().click();
    cy.wait(1000);
    PostListPage.getLastPostLink().should('contain.text', 'Test content #2');

  });*/
});
