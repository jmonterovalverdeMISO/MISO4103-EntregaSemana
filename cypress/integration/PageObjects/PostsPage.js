/// <reference types="cypress" />

class PostsPage{

    getNewPostButton(){
        return cy.get('.gh-btn.gh-btn-green.ember-view[href="#/editor/post/"]');
    }

    getTitleField(){
        return cy.get('.gh-editor-title');
    }

    getPostUnformattedContentField(){
        return cy.get('.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
    }

    getHearderStatusLabel(){
        return cy.get('.flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div');
    }

    getHearderStatusLabelForScheduledPosts(){
        return cy.get('div.flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div>time');
    }

    getBackToPostsPageButton(){
        return cy.get('.blue.link.fw4.flex.items-center.ember-view[href="#/posts/"]');
    }

    getPublishMenu(){
        return cy.get('.gh-publishmenu-trigger');
    }

    getSetItLiveOption(){
        return cy.get('.gh-publishmenu-radio-button').first();
    }

    getPublishLaterOption(){
        return cy.get('.gh-date-time-picker-timezone').first();
    }

    getPublishButton(){
        return cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
    }

    getScheduleButton(){
        return cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
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
        return cy.get('button.koenig-plus-menu-button.flex.justify-center.items-center.relative.w9.h9.ba.b--midlightgrey-l2.bg-white.br-100.anim-normal');
    }

    getBookmarkOption(){
        return cy.get('div:contains("Bookmark").f-supersmall.tracked-1.fw3.ma0.mt1');
    }

    getPostSettingsButton(){
        return cy.get('.post-settings');
    }

    getTagsTextbox(){
        return cy.get('#tag-input').first();
    }

    getFirstTagFromList(){
        return cy.get('.ember-power-select-option[data-option-index="0"]');
    }

    getCloseSettingsButton(){
        return cy.get('.close.settings-menu-header-action');
    }

}
export default PostsPage