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

const versions = {
  '3.3.0': (user, password) => {
    const LoginPage = require("../integration/3.3.0/pageObjects/LoginPage");

    Cypress.config('baseUrl', Cypress.env('GHOST_3_3_0'))

    cy.visit('/ghost/#/signin')

    LoginPage.getUserNameField().type(user)
    LoginPage.getPasswordField().type(password)
    LoginPage.getSignInButon().click()
  },
  '3.42.5': (user, password) => {
    const LoginPage = require("../integration/3.42.5/pageObjects/LoginPage");

    Cypress.config('baseUrl', Cypress.env('GHOST_3_42_5'))

    cy.visit('/ghost/#/signin')

    LoginPage.getUserNameField().type(user)
    LoginPage.getPasswordField().type(password)
    LoginPage.getSignInButon().click()
  }
}

Cypress.Commands.add('login', (version) => {
  if (!version) {
    throw 'No ghost version provided';
  }

  if (!versions[version]) {
    throw 'No login fn found for that version';
  }

  const user = Cypress.env('GHOST_USER') || 'user@test.com';
  const password = Cypress.env('GHOST_PASS') || 'dev1234567';

  if (version.includes('3.3.0')) {
    versions['3.3.0'](user, password);
  }

  if (version.includes('3.42.5')) {
    versions['3.42.5'](user, password);
  }

  cy.wait(500)
})