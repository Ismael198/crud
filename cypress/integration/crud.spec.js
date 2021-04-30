///<reference types="cypress"/>

describe('Notes', () => {
  beforeEach(() => {  
     cy.login()
  })

  it('creates a note', () => {
    cy.contains('Create a new note').click()
    cy.get('#content').type('My note')
    cy.contains('Create').click()
    cy.get('.list-group').should('contain', 'My note')
  })

  it('edits a note', () => {
    cy.get('.list-group').contains('My note').click()
    cy.get('#content').type(' updated')
    cy.contains('Save').click()
    cy.get('.list-group').should('contain', 'My note updated')
    cy.get('.list-group:contains(My note updated)').should('be.visible')
  })

  it('deletes a note', () => {
    cy.get('.list-group').contains('My note updated').click()
    cy.contains('Delete').click()

    cy.get('.list-group:contains(My note updated)').should('not.exist')
  })
})
