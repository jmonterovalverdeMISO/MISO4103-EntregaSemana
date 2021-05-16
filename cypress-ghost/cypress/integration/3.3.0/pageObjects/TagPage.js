/// <reference types="cypress" />

class TagPage {
    static getNameInput() {
        return cy.get('input[name="name"]');
    }
    static getSaveButton() {
        return cy.get('.view-actions button')
    }
	static getDeleteButton() {
		return cy.get('.gh-btn-red > span');
	}
	static getAcceptDeleteButton() {
		return cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
	}
}

export default TagPage;
