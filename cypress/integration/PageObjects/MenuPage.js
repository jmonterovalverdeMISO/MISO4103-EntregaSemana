/// <reference types='cypress' />

class MenuPage{
     


    getPostsLink(){
        return cy.get('a:visible.ember-view[href="#/posts/"]');
    }
    
    getPagesLink(){
        return cy.get('a:visible.ember-view[href="#/pages/"]');
    }

}
export default MenuPage