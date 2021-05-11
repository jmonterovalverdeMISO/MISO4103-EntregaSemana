/// <reference types='cypress' />

class PagesListPage{

    getLastPageLink(){
        return cy.get('a:visible.ember-view.permalink.gh-list-data.gh-post-list-title').first();
    }

    getLastScheduledPage(){
        return cy.get('span:contains("Scheduled").gh-content-status-draft.gh-badge.nowrap').first();
    }

    getLastDraftPage(){
        return cy.get('span:contains("Draft").gh-content-status-draft.gh-badge.gh-badge-purple.nowrap').first();
    }

    getLastPublishedPage(){
        return cy.get('span:contains("PUBLISHED").gh-content-status-draft.gh-badge.gh-badge-pink.nowrap').first();
    }

    getLastScheduledPageTitle(){
        return cy.get('span:contains("Scheduled").gh-content-status-draft.gh-badge.nowrap').first()
        .parent().parent().parent().find('.gh-content-entry-title');
    }

    getLastDraftPageTitle(){
        return cy.get('span:contains("Draft").gh-content-status-draft.gh-badge.gh-badge-purple.nowrap').first()
        .parent().parent().parent().find('.gh-content-entry-title');
    }

    getLastPublishedPostTitle(){
        return cy.get('span:contains("Published").gh-content-status-published').first()
        .parent().parent().parent().find('.gh-content-entry-title');
    }


}
export default PagesListPage