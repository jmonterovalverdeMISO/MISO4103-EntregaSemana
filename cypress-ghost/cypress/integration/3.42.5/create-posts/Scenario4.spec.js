/// <reference types='cypress' />
import MenuPage from "../../pageObjects/MenuPage";
import PostsPage from "../../pageObjects/PostsPage";
import PostsListPage from "../../pageObjects/PostListPage";

context("Ghost - ", () => {
  beforeEach(() => {
    cy.login();
  });

  it("creates empty post", () => {
    cy.url().should("include", "ghost/#/site");
    MenuPage.getDirectNewPostLink().click();
    cy.wait(5000);
    cy.url().should("include", "ghost/#/editor/post");
    PostsPage.getTitleField().click();
    PostsPage.getTitleField().click();
    PostsPage.getBackToPostsPageButton().click();
    cy.wait(5000);
  });

  it("fills title, plain contents and schedules publicaction of the post", () => {
    MenuPage.getPostsLink().click();
    cy.wait(5000);
    PostsListPage.getLastDraftPost().click({ force: true });
    cy.wait(3000);
    cy.url().should("include", "ghost/#/editor/post");
    PostsPage.getTitleField().clear().type("Test post #4");
    PostsPage.getPostUnformattedContentField().type("Test content #4");
    PostsPage.getHearderStatusLabel().click();
    cy.wait(3000);
    PostsPage.getHearderStatusLabel().should("contain.text", "Draft");
    PostsPage.getPublishMenu().click();
    cy.wait(3000);
    PostsPage.getPublishLaterOption().click();
    PostsPage.getScheduleButton().click();
    cy.wait(3000);

    PostsPage.getHearderStatusLabelForScheduledPosts().should(
      "contain.text",
      "Will be published in 5 minutes"
    );
    PostsPage.getBackToPostsPageButton().click();
    cy.url().should("include", "ghost/#/posts");
    //this is a workaround given that cypress will break if we use the filtering manu on top of the page
    //due to that menu triggering an API call from a different domain
    PostsListPage.getLastScheduledPostTitle().should(
      "contain.text",
      "Test post #4"
    );
  });
});
