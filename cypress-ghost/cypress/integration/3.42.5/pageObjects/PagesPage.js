/// <reference types="cypress" />

class PagesPage {
  static getNewPageButton() {
    return cy.get('.gh-btn.gh-btn-green.ember-view[href="#/editor/page/"]').first();
  }

  static getTitleField() {
    return cy.get(".gh-editor-title");
  }

  static getPageUnformattedContentField() {
    return cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content");
  }

  static getHearderStatusLabel() {
    return cy.get(
      ".flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div"
    );
  }

  static getHearderStatusLabelForScheduledPages() {
    return cy.get(
      "div.flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div>time"
    );
  }

  static getBackToPagesPageButton() {
    return cy.get(
      '.blue.link.fw4.flex.items-center.ember-view[href="#/pages/"]'
    );
  }

  static getPublishMenu() {
    return cy.get(".gh-publishmenu-trigger");
  }

  static getSetItLiveOption() {
    return cy.get(".gh-publishmenu-radio-button").first();
  }

  static getPublishLaterOption() {
    return cy.get(".gh-date-time-picker-timezone").first();
  }

  static getPublishButton() {
    return cy.get(
      "button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
    );
  }

  static getScheduleButton() {
    return cy.get(
      "button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
    );
  }

  static getSortByUpdateDateMenu() {
    return cy.get(".gh-contentfilter-menu.gh-contentfilter-sort");
  }

  static getSortByTypeMenu() {
    return cy.get(".gh-contentfilter-menu.gh-contentfilter-type");
  }

  static getRecentlyUpdatedMenuOption() {
    return cy.get('.ember-power-select-option[data-option-index="2"]');
  }

  static getScheduledMenuOption() {
    return cy.get('.ember-power-select-option[data-option-index="3"]');
  }

  static getAddCardButton() {
    return cy.get(
      "button.koenig-plus-menu-button.flex.justify-center.items-center.relative.w9.h9.ba.b--midlightgrey-l2.bg-white.br-100.anim-normal"
    );
  }

  static getBookmarkOption() {
    return cy.get(
      'div:contains("Bookmark").f-supersmall.tracked-1.fw3.ma0.mt1'
    );
  }

  static getPostSettingsButton() {
    return cy.get(".post-settings");
  }

  static getDeleteButtonPage() {
    return cy.get("form > .gh-btn > span");
  }
  static getAcceptDeleteButtonPage() {
    return cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view");
  }
  static getCloseSettingsButton() {
    return cy.get(".close.settings-menu-header-action");
  }

  static getTitleField(){
    return cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view');
}

static getDescriptionField(){
    return cy.get('.koenig-editor__editor.__mobiledoc-editor');
}

static getPublishMenu(){
    return cy.get('.gh-publishmenu-trigger');
}

static getPublishButton(){
    return cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
}


static getUnPublishButton(){
    return cy.get('div.flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white');
}

static getBackToPostsPageButton(){
    return cy.get('.blue.link.fw4.flex.items-center.ember-view[href="#/posts/"]');
}

static getBackToPagesButton(){
    return cy.get('.blue.link.fw4.flex.items-center.ember-view[href="#/pages/"]');
}

static getPublishLaterOption(){
    return cy.get('.gh-date-time-picker-timezone').first();
}

static getScheduleButton(){
    return cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
}

static getHearderStatusLabelForScheduledPosts(){
    return cy.get('div.flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div>time');
}

}
export default PagesPage;
