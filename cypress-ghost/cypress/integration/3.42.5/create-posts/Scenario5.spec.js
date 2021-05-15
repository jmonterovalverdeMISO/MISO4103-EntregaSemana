/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PostsPage from "../pageObjects/PostsPage";
import PostListPage from "../pageObjects/PostListPage";

context("Create Post - ", () => {
  beforeEach(() => {
    cy.login('3.42.5');
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
    cy.wait(5000);
    cy.url().should("include", "ghost/#/editor/post");
    PostsPage.getPostSettingsButton().click();
    PostsPage.getTagsTextbox().click();
    PostsPage.getFirstTagFromList().click();
    PostsPage.getCloseSettingsButton().click();
    PostsPage.getTitleField().clear().type("Test post #5 with tags");
    PostsPage.getHearderStatusLabel().click();
    cy.wait(5000);
    PostsPage.getHearderStatusLabel().should("contain.text", "Draft");
    PostsPage.getBackToPostsPageButton().click();
    cy.url().should("include", "ghost/#/posts");
    //this is a workaround given that cypress will break if we use the filtering manu on top of the page
    //due to that menu triggering an API call from a different domain
    PostListPage.getLastDraftPostTitle().should(
      "contain.text",
      "Test post #5 with tags"
    );
  });
});
