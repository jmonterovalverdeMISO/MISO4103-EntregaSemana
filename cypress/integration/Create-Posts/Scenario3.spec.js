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
    cy.url().should('include', 'ghost/#/dashboard');
    menuPage.getPostsLink().click();
    cy.wait(5000);
    cy.url().should('include', 'ghost/#/posts');
    postsPage.getNewPostBytton().click();
    cy.url().should('include', 'ghost/#/editor/post');
    postsPage.getTitleField().click();
    postsPage.getTitleField().click();
    postsPage.getBackToPostsPageButton().click();
    cy.wait(5000);
  });

  it('fills title and adds bookmark', () => {
    menuPage.getPostsLink().click();
    cy.wait(5000);
    postsListPage.getLastDraftPost().click({ force: true });
    cy.wait(3000);
    cy.url().should('include', 'ghost/#/editor/post');
    postsPage.getTitleField().clear().type('Test post #3 with Bookmark');
    postsPage.getPostUnformattedContentField().click();
    postsPage.getAddCardButton().click();
    cy.wait(1000);
    postsPage.getBookmarkOption().click({ force: true });
    cy.focused().type('https://biblioteca.uniandes.edu.co/');
    postsPage.getHearderStatusLabel().click();
    cy.wait(3000);
    postsPage.getHearderStatusLabel().should('contain.text', 'Draft');
    postsPage.getBackToPostsPageButton().click();
    cy.url().should('include', 'ghost/#/posts');
    //this is a workaround given that cypress will break if we use the filtering manu on top of the page
    //due to that menu triggering an API call from a different domain
    postsListPage.getLastDraftPostTitle().should('contain.text', 'Test post #3 with Bookmark');
    
  });


});
