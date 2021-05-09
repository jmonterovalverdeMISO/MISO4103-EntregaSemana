/// <reference types='cypress' />

class MenuPage{

    getPostsLink(){
        return cy.get('a:visible.ember-view[href="#/posts/"]');
    }
    getDirectNewPostLink(){
        return cy.get('.gh-nav-new-post[href="#/editor/post/"]');
    }

}
export default MenuPage