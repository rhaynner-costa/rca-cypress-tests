/// <reference types="Cypress" /> 

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

  it('Send an invalid password', () => {
    //digitar em usuario valido
    cy.get('input[name="username"]')
      .should('be.visible')
      .type('Admin')
      .should('have.value', 'Admin')
    //digitar senha invalida
    cy.get('input[name="password"]')
      .should('be.visible')
      .type('senhaErrada')
      .should('have.value', 'senhaErrada')
    //clicar em login 
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
    //validar mensagem de erro 
    cy.get('p')
      .contains('Invalid credentials')
      .should('be.visible')
    cy.title().should('eq', 'OrangeHRM')

  })

  it('Send user and password empty', () => {
    //não digitar em usuario 
    //nao digitar senha 
    //clicar em login 
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
    //validar mensagem de erro 
    cy.get('span')
      .contains('Required')
      .should('be.visible')
    cy.title().should('eq', 'OrangeHRM')

  })

  it('Send only a valid user name', () => {
    //digitar em usuario valido
    cy.get('input[name="username"]')
      .should('be.visible')
      .type('Admin')
      .should('have.value', 'Admin')
    //nao digitar senha 
    //clicar em login 
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
    //validar mensagem de erro 
    cy.get('span')
      .contains('Required')
      .should('be.visible')

  })

  it('Send only a valid password', () => {
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
    cy.get('span')
      .contains('Required')
      .should('be.visible')

  })

  it('Send a valid username and password', () => {
    // digitar em usuario valido
    cy.get('input[name="username"]')
      .should('be.visible')
      .type('Admin')
      .should('have.value', 'Admin')
    // digitar senha valida
    cy.get('input[name="password"]')
      .should('be.visible')
      .type('admin123')
      .should('have.value', 'admin123')
    //clicar em login 
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
    //validar se navegou para a pagina correta
    cy.get('h6')
      .contains('Dashboard')
      .should('be.visible')
  })

  it('Test fail', () => {
    // digitar em usuario valido
    cy.get('input[name="username"]')
      .should('be.visible')
      .type('Admin')
      .should('have.value', 'Admin')
    // digitar senha valida
    cy.get('input[name="password"]')
      .should('be.visible')
      .type('admin123')
      .should('have.value', 'admin123')
    //clicar em login 
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
    //validar se navegou para a pagina correta
    cy.get('h6')
      .contains('Dashboard')
      .should('no.be.visible')
  })

})