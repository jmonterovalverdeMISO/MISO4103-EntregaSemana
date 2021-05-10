/// <reference types='cypress' />

class PostsListPage{


    getListPostTitle(){
        return cy.get('a[title="Edit this post"');
    }

    getLastPublishedPostTitle(){
        return cy.get('span:contains("Published").gh-content-status-published').first()
        .parent().parent().parent().find('.gh-content-entry-title');
    }

    getLastDraftPostTitle(){
        return cy.get('span:contains("Draft").gh-content-status-draft.gh-badge.gh-badge-purple.nowrap').first()
        .parent().parent().parent().find('.gh-content-entry-title');
    }

    getLastScheduledPostTitle(){
        return cy.get('span:contains("Scheduled").gh-content-status-draft.gh-badge.nowrap').first()
        .parent().parent().parent().find('.gh-content-entry-title');
    }

    


}
export default PostsListPage
