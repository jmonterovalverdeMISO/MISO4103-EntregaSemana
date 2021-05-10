/// <reference types="cypress" />

class PostsPage{

    getTitleField(){
        return cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view');
    }

    getDescriptionField(){
        return cy.get('.koenig-editor__editor.__mobiledoc-editor');
    }

    getPublishMenu(){
        return cy.get('.gh-publishmenu-trigger');
    }

    getPublishButton(){
        return cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
    }


    getUnPublishButton(){
        return cy.get('div.flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white');
    }
  
    getBackToPostsPageButton(){
        return cy.get('.blue.link.fw4.flex.items-center.ember-view[href="#/posts/"]');
    }

    getBackToPagesButton(){
        return cy.get('.blue.link.fw4.flex.items-center.ember-view[href="#/pages/"]');
    }

    getPublishLaterOption(){
        return cy.get('.gh-date-time-picker-timezone').first();
    }

    getScheduleButton(){
        return cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
    }

    getHearderStatusLabelForScheduledPosts(){
        return cy.get('div.flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div>time');
    }

}
export default PostsPage