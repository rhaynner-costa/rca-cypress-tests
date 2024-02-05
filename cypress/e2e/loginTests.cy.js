describe('Login tests', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')

  })

  it('Send an invalid username', () => {

    //digitar user invalido
    cy.get('input[name="username"]')
      .should('be.visible')
      .type('UserErrado')
      .should('have.value', 'UserErrado')
    //digitar senha valida
    cy.get('input[name="password"]')
      .should('be.visible')
      .type('admin123')
      .should('have.value', 'admin123')
    //clicar em login 
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
    //validar mensagem de erro 
    cy.get('p')
      .contains('Invalid credentials')
      .should('be.visible')
    //valida se estou na pagina de login
    cy.title().should('eq', 'OrangeHRM')

  })

  // it('Send an invalid password', () => {
  //   //digitar em usuario valido
  //   //digitar senha invalida
  //   //clicar em login 
  //   //validar mensagem de erro 

  // })

  // it('Send user and password empty', () => {
  //   //não digitar em usuario valido
  //   //nao digitar senha invalida
  //   //clicar em login 
  //   //validar mensagem de erro 

  // })

  // it('Send a valid username and password', () => {
  //   // digitar em usuario valido
  //   // digitar senha valido
  //   //clicar em login 
  //   //validar se navegou para a pagina correta
  // })

})