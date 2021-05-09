Cypress.Commands.add('login', () => {
    cy.visit('')
    cy.get('.navbar-nav a:contains(Login)').click()
    cy.get('#email').type(Cypress.env('user'))
    cy.get('#password').type(Cypress.env('password'), {log: false})
    cy.get('button[type="submit"]').click()
    cy.contains('Your Notes', {timeout:40000}).should('be.visible')
})

Cypress.Commands.add('createNote', (note) => {
    cy.contains('Create a new note').click()
    cy.get('#content').type(note)
    cy.contains('Create').click()
})

Cypress.Commands.add('editNote', (note) => {
    cy.get('.list-group').contains(note).click()
    cy.get('#content').type(' updated')
    cy.contains('Save').click()
})

Cypress.Commands.add('deleteNote', (note) => {
    cy.get('.list-group').contains(note).click()
    cy.contains('Delete').click()
})