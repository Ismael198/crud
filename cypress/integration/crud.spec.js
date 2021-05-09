///<reference types="cypress"/>

describe('Notes', () => {
  beforeEach(() => {  
     cy.login()
  })

  it('create, edit and delete a note', () => {
    const note = 'Meu notebook'
    const noteUpdated = `${note} updated`
    cy.createNote(note)
    //fazendo verificação se a nota foi criada
    cy.get('.list-group').should('contain', note)
    //edita a nota
    cy.editNote(note)
    //verificação que a nota foi editada
    cy.get('.list-group').should('contain', noteUpdated)
    cy.get(`.list-group:contains(${noteUpdated})`).should('be.visible')
    //deleta a nota
    cy.deleteNote(noteUpdated)
    //verificação que a nota foi deletada
    cy.get(`.list-group:contains(${noteUpdated})`).should('not.exist')
  })
})
