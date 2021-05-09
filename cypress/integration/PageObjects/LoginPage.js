/// <reference types='cypress' />

class LoginPage{

    getPasswordField(){
        return cy.get('#ember10');
    }
    getUserNameField(){
        return cy.get('#ember8');
    }
    getSignInButon(){
        return cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view');
    }
}
export default LoginPage