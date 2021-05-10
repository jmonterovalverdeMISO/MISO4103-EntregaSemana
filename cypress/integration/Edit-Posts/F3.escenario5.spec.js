/// <reference types='cypress' />
import MenuPage from '../PageObjects/MenuPage';
import PostsPage from '../PageObjects/PostsPage';
import PostsListPage from '../PageObjects/PostListPage';

context('Edit Page - ', () => {

    const menuPage = new MenuPage();
    const postsPage = new PostsPage();
    const postsListPage = new PostsListPage();

    beforeEach(() => {
        cy.Login('mfelipebello04@gmail.com', 'pruebas1234');
      });


    it('Edit Page - Title - Description', () => {
        cy.url().should('include', 'ghost/#/site');
        menuPage.getPagesLink().click();
        if(cy.get('span:contains("Published")')){
        postsListPage.getLastPublishedPostTitle().first().click({force:true});
        postsPage.getTitleField().dblclick({ force: true });
        postsPage.getTitleField().clear();
        postsPage.getTitleField().type("Test #5 Edit Page {enter}");
        postsPage.getDescriptionField().dblclick({ force: true });
        postsPage.getDescriptionField().clear();
        postsPage.getDescriptionField().type("Test #5 Edit Page {enter}");
        postsPage.getPublishMenu().click();
        postsPage.getPublishButton().click();
        postsPage.getBackToPagesButton().click(); 
        postsListPage.getLastPublishedPostTitle().should('contain.text', 'Test #5 Edit Page');
        }
        else{
            cy.get('span:contains("Published")').should('not.exist')
        }
    })
    


});