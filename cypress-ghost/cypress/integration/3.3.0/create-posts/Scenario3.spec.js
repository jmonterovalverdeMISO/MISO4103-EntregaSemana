/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PostsPage from "../pageObjects/PagesPage";
import PostListPage from "../pageObjects/PostListPage";

context("Ghost - ", () => {
  beforeEach(() => {
    cy.login('3.3.0');
  });

  it("creates empty post", () => {
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

  it("fills title and adds bookmark", () => {
    MenuPage.getPostsLink().click();
    cy.wait(5000);
    PostListPage.getLastDraftPost().click({ force: true });
    cy.wait(3000);
    cy.url().should("include", "ghost/#/editor/post");
    PostsPage.getTitleField().clear().type("Test post #3 with Bookmark");
    PostsPage.getPostUnformattedContentField().click();
    cy.wait(1000);
    PostsPage.getAddCardButton().click();
    cy.wait(1000);
    PostsPage.getBookmarkOption().click({ force: true });
    cy.focused().type("https://biblioteca.uniandes.edu.co/");
    PostsPage.getHearderStatusLabel().click();
    cy.wait(3000);
    PostsPage.getHearderStatusLabel().should("contain.text", "Draft");
    PostsPage.getBackToPostsPageButton().click();
    cy.url().should("include", "ghost/#/posts");
    //this is a workaround given that cypress will break if we use the filtering manu on top of the page
    //due to that menu triggering an API call from a different domain
    PostListPage.getLastDraftPostTitle().should(
      "contain.text",
      "Test post #3 with Bookmark"
    );
  });
});
