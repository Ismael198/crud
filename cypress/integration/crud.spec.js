///<reference types="cypress"/>

describe('Notes', () => {
  beforeEach(() => {  
     cy.login()
  })

  it('creates a note', () => {
    cy.contains('Create a new note').click()
    cy.get('#content').type('Meu notebook')
    cy.contains('Create').click()
    cy.get('.list-group').should('contain', 'Meu notebook')
  })

  it('edits a note', () => {
    cy.get('.list-group').contains('Meu notebook').click()
    cy.get('#content').type(' updated')
    cy.contains('Save').click()
    cy.get('.list-group').should('contain', 'Meu notebook updated')
    cy.get('.list-group:contains(Meu notebook updated)').should('be.visible')
  })

  it('deletes a note', () => {
    cy.get('.list-group').contains('Meu notebook updated').click()
    cy.contains('Delete').click()

    cy.get('.list-group:contains(Meu notebook updated)').should('not.exist')
  })
})
