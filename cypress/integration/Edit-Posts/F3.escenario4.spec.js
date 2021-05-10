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


    it('Edit Posts - Title - Description - Schedule', () => {
        cy.url().should('include', 'ghost/#/site');
        menuPage.getPostsLink().click();
        if(cy.get('span:contains("Draft")')){
            postsListPage.getLastDraftPostTitle().first().click({force:true});
            postsPage.getTitleField().dblclick({ force: true });
            postsPage.getTitleField().clear();
            postsPage.getTitleField().type("Test #4 Edit {enter}");
            postsPage.getDescriptionField().dblclick({ force: true });
            postsPage.getDescriptionField().clear();
            postsPage.getDescriptionField().type("Test #4 Edit {enter}");
            postsPage.getPublishMenu().click();
            postsPage.getPublishLaterOption().click();
            postsPage.getScheduleButton().click();
            postsPage.getHearderStatusLabelForScheduledPosts().should('contain.text', 'Scheduled to be published'); 
            postsPage.getPublishButton().click();
            postsPage.getBackToPostsPageButton().click(); 
            postsListPage.getLastScheduledPostTitle().should('contain.text', 'Test #4 Edit');
        }
        else{
            cy.get('span:contains("Draft")').should('not.exist')
        }
    })
    


});