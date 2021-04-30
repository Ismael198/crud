Cypress.Commands.add('login', () => {
    cy.visit('')
    cy.get('.navbar-nav a:contains(Login)').click()
    cy.get('#email').type(Cypress.env('user'))
    cy.get('#password').type(Cypress.env('password'), {log: false})
    cy.get('button[type="submit"]').click()
    cy.contains('Your Notes', {timeout:40000}).should('be.visible')
})