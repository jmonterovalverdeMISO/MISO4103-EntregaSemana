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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import LoginPage from '../integration/PageObjects/LoginPage';

Cypress.Commands.add('Login', (email, password) => {
    const page =new LoginPage();
    cy.visit('http://localhost:2368/ghost');
    cy.visit('http://localhost:2368/ghost/#/signin');

    cy.wait(3000);

    //cy.get('#ember8').type(email);
    page.getUserNameField().type(email);

    page.getPasswordField().type(password);

    page.getSignInButon().click();

    cy.wait(3000);
  })
