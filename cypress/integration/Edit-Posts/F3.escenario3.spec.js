/// <reference types='cypress' />
import MenuPage from '../PageObjects/MenuPage';
import PostsPage from '../PageObjects/PostsPage';
import PostsListPage from '../PageObjects/PostListPage';

context('Edit Post - ', () => {

    const menuPage = new MenuPage();
    const postsPage = new PostsPage();
    const postsListPage = new PostsListPage();

    beforeEach(() => {
        cy.Login('mfelipebello04@gmail.com', 'pruebas1234');
      });


    it('Edit Posts - Title', () => {
        cy.url().should('include', 'ghost/#/site');
        menuPage.getPostsLink().click();
        if(cy.get('span:contains("Published")')){
        postsListPage.getLastPublishedPostTitle().first().click({force:true});
        postsPage.getTitleField().dblclick({ force: true });
        postsPage.getTitleField().clear();
        postsPage.getTitleField().type("Test #3 Edit {enter}");
        postsPage.getPublishMenu().click();
        postsPage.getPublishButton().click();
        postsPage.getBackToPostsPageButton().click(); 
        postsListPage.getLastPublishedPostTitle().should('contain.text', 'Test #3 Edit');
        }
        else{
            cy.get('span:contains("Published")').should('not.exist')
        }
    })
    


});