/// <reference types='cypress' />
import MenuPage from '../PageObjects/MenuPage';
import PostsPage from '../PageObjects/PostsPage';
import PostsListPage from '../PageObjects/PostListPage';

context('Ghost - ', () => {
  const menuPage = new MenuPage();
  const postsPage = new PostsPage();
  const postsListPage = new PostsListPage();

  beforeEach(() => {
    cy.Login('jelimv@hotmail.com', 'Curso.4103');
  });

  it('creates empty post', () => {
    cy.url().should('include', 'ghost/#/site');
    menuPage.getDirectNewPostLink().click();
    cy.wait(5000);
    cy.url().should('include', 'ghost/#/editor/post');
    postsPage.getTitleField().click();
    postsPage.getTitleField().click();
    postsPage.getBackToPostsPageButton().click();
    cy.wait(5000);
  });

  it('fills title, plain contents and schedules publicaction of the post', () => {
    menuPage.getPostsLink().click();
    cy.wait(5000);
    postsListPage.getLastDraftPost().click({ force: true });
    cy.wait(3000);
    cy.url().should('include', 'ghost/#/editor/post');
    postsPage.getTitleField().clear().type('Test post #4');
    postsPage.getPostUnformattedContentField().type('Test content #4');
    postsPage.getHearderStatusLabel().click();
    cy.wait(3000);
    postsPage.getHearderStatusLabel().should('contain.text', 'Draft');
    postsPage.getPublishMenu().click();
    cy.wait(3000);
    postsPage.getPublishLaterOption().click();
    postsPage.getScheduleButton().click();
    cy.wait(3000);
    
    postsPage.getHearderStatusLabelForScheduledPosts().should('contain.text', 'Scheduled to be published '); 
    postsPage.getBackToPostsPageButton().click();
    cy.url().should('include', 'ghost/#/posts');
    //this is a workaround given that cypress will break if we use the filtering manu on top of the page
    //due to that menu triggering an API call from a different domain
    postsListPage.getLastScheduledPostTitle().should('contain.text', 'Test post #4');
  });


});
