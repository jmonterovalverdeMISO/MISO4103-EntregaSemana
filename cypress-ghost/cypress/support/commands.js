// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import LoginPage from "../pageObjects/LoginPage"


Cypress.Commands.add('login', () => {
    cy.visit('/ghost/#/signin')

    const user = Cypress.env('GHOST_USER') || 'jc.dazam1@uniandes.edu.co';
    const password = Cypress.env('GHOST_PASS') || 'uniandes1234';

    LoginPage.getUserNameField().type(user)
    LoginPage.getPasswordField().type(password)
    LoginPage.getSignInButon().click()

    cy.wait(500)
})