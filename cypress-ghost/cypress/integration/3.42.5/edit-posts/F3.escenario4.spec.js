/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PagesPage from "../pageObjects/PagesPage";
import PagesListPage from "../pageObjects/PagesListPage";

context("Edit Post - ", () => {
  beforeEach(() => {
    cy.login('3.42.5');
  });

  it("Edit Posts - Title - Description - Schedule", () => {
    cy.url().should("include", "ghost/#/site");
    MenuPage.getPostsLink().click();
    if (cy.get('span:contains("Draft")')) {
      PostListPage.getLastDraftPostTitle().first().click({ force: true });
      PostsPage.getTitleField().dblclick({ force: true });
      PostsPage.getTitleField().clear();
      PostsPage.getTitleField().type("Test #4 Edit {enter}");
      PostsPage.getDescriptionField().dblclick({ force: true });
      PostsPage.getDescriptionField().clear();
      PostsPage.getDescriptionField().type("Test #4 Edit {enter}");
      PostsPage.getPublishMenu().click();
      PostsPage.getPublishLaterOption().click();
      PostsPage.getScheduleButton().click();
      PostsPage.getHearderStatusLabelForScheduledPosts().should(
        "contain.text",
        "Scheduled to be published"
      );
      PostsPage.getPublishButton().click();
      PostsPage.getBackToPostsPageButton().click();
      PostListPage.getLastScheduledPostTitle().should(
        "contain.text",
        "Test #4 Edit"
      );
    } else {
      cy.get('span:contains("Draft")').should("not.exist");
    }
  });
});
