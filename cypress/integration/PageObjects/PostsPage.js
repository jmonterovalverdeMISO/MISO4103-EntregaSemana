/// <reference types="cypress" />

class PostsPage{

    getNewPostBytton(){
        return cy.get('.ember-view.gh-btn.gh-btn-primary.view-actions-top-row[href="#/editor/post/"]');
    }

    getTitleField(){
        return cy.get('.gh-editor-title');
    }

    getPostUnformattedContentField(){
        return cy.get('.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
    }

    getHearderStatusLabel(){
        return cy.get('.gh-editor-post-status>span>div');
    }

    getHearderStatusLabelForScheduledPosts(){
        return cy.get('.gh-editor-post-status>span>div>time');
    }

    getBackToPostsPageButton(){
        return cy.get('.gh-editor-back-button.ember-view');
    }

    getPublishMenu(){
        return cy.get('.gh-publishmenu-trigger');
    }

    getSetItLiveOption(){
        return cy.get('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view');
    }

    getPublishLaterOption(){
        return cy.get('.gh-date-time-picker-timezone').first();
    }

    getPublishButton(){
        return cy.get('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view');
    }

    getScheduleButton(){
        return cy.get('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view');
    }

    getSortByUpdateDateMenu(){
        return cy.get('.gh-contentfilter-menu.gh-contentfilter-sort');
    }

    getSortByTypeMenu(){
        return cy.get('.gh-contentfilter-menu.gh-contentfilter-type');
    }

    getRecentlyUpdatedMenuOption(){
        return cy.get('.ember-power-select-option[data-option-index="2"]');
    }

    getScheduledMenuOption(){
        return cy.get('.ember-power-select-option[data-option-index="3"]');
    }

    getAddCardButton(){
        return cy.get('button[aria-label="Add a card"]');
    }

    getBookmarkOption(){
        return cy.get('.flex[title="Bookmark"]');
    }

    getPostSettingsButton(){
        return cy.get('.gh-btn.gh-btn-editor.gh-btn-icon.only-has-icon.gh-actions-cog.ml3');
    }

    getTagsTextbox(){
        return cy.get('.ember-power-select-trigger-multiple-input').first();
    }

    getFirstTagFromList(){
        return cy.get('.ember-power-select-option[data-option-index="0"]');
    }

    getCloseSettingsButton(){
        return cy.get('.close.settings-menu-header-action');
    }

}
export default PostsPage