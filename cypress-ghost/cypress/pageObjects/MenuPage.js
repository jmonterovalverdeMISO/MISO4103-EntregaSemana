/// <reference types='cypress' />

class MenuPage {
  static getPostsLink() {
    return cy.get('a:visible.ember-view[href="#/posts/"]');
  }
  static getDirectNewPostLink() {
    return cy.get('.gh-nav-new-post[href="#/editor/post/"]');
  }
  static getPagesLink(){
      return cy.get('a:visible.ember-view[href="#/pages/"]');
  }
}
export default MenuPage;
