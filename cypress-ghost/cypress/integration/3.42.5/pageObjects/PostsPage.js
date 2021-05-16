/// <reference types="cypress" />

class PostsPage {
  static getNewPostButton() {
    return cy.get('.gh-btn.gh-btn-green.ember-view[href="#/editor/post/"]');
  }

  static getTitleField() {
    return cy.get(".gh-editor-title");
  }

  static getDescriptionField(){
    return cy.get('.koenig-editor__editor.__mobiledoc-editor');
  }

  static getPostUnformattedContentField() {
    return cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content");
  }

  static getHearderStatusLabel() {
    return cy.get(
      ".flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div"
    );
  }

  static getHearderStatusLabelForScheduledPosts() {
    return cy.get(
      "div.flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div>time"
    );
  }

  static getBackToPagesButton(){
    return cy.get('.blue.link.fw4.flex.items-center.ember-view[href="#/pages/"]');
  }

  static getBackToPostsPageButton() {
    return cy.get(
      '.blue.link.fw4.flex.items-center.ember-view[href="#/posts/"]'
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
    return cy.get('[title="Bookmark"]');
  }

  static getPostSettingsButton() {
    return cy.get(".post-settings");
  }

  static getTagsTextbox() {
    return cy.get("#tag-input").first();
  }

  static getFirstTagFromList() {
    return cy.get('.ember-power-select-option[data-option-index="0"]');
  }

  static getCloseSettingsButton() {
    return cy.get(".close.settings-menu-header-action");
  }
}

export default PostsPage;
