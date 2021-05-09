/// <reference types='cypress' />

class PostsListPage{

    getLastPostLink(){
        return cy.get('a:visible.ember-view.permalink.gh-list-data.gh-post-list-title').first();
    }

    getLastScheduledPost(){
        return cy.get('span:contains("Scheduled").gh-content-status-draft.gh-badge.nowrap').first();
    }

    getLastDraftPost(){
        return cy.get('span:contains("Draft").gh-content-status-draft.gh-badge.gh-badge-pink.nowrap').first();
    }

    getLastPublishedPost(){
        return cy.get('span:contains("PUBLISHED").gh-content-status-draft.gh-badge.gh-badge-pink.nowrap').first();
    }

    getLastScheduledPostTitle(){
        return cy.get('span:contains("Scheduled").gh-content-status-draft.gh-badge.nowrap').first()
        .parent().parent().parent().find('.gh-content-entry-title');
    }

    getLastDraftPostTitle(){
        return cy.get('span:contains("Draft").gh-content-status-draft.gh-badge.gh-badge-pink.nowrap').first()
        .parent().parent().parent().find('.gh-content-entry-title');
    }

    getLastPublishedPostTitle(){
        return cy.get('span:contains("Published").gh-content-status-published').first()
        .parent().parent().parent().find('.gh-content-entry-title');
    }


}
export default PostsListPage
