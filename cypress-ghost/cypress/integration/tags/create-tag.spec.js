/// <reference types="cypress" />

context('Create', () => {
  describe('Public tag only using name', () => {
    before(() => {
      cy.login('example@example.com', 'dev1234567')

      cy.visit('/ghost/#/tags')
    })

    beforeEach(() => {
      Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })

    it('should navigate to /tags/new by clicking new tag button', () => {
      cy.contains('Public tags').click()
      cy.contains('New tag').click()

      cy.url().should('include', '/ghost/#/tags/new')
    })

    // it('should create new tag with only name', () => {
    //   cy.get('input[name="name"]').type('My new tag', { force: true })
    //   cy.contains('Save').click()

    //   cy.visit('/ghost/#/tags')

    //   cy.get()
    // })
  });
})
