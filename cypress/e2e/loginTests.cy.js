/// <reference types="Cypress" /> 

import login from "../PageObjects/LoginPage.js";

describe('Login tests', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq', 'OrangeHRM')

  })

  it('Send a invalid username', () => {
    login.setUserName('UserErrado')
    login.setPassword('admin123')
    login.clickLoginButton()
    login.credencialAlert(true)

  })

  it('Send a invalid password', () => {
    login.setUserName('Admin')
    login.setPassword('senhaErrada')
    login.clickLoginButton()
    login.credencialAlert(true)

  })

  it('Send user and password empty', () => {
    login.clickLoginButton()
    login.dataRequiredAlert(true)

  })

  it('Send only a valid user name', () => {
    login.setUserName('Admin')
    login.clickLoginButton()
    login.dataRequiredAlert(true)

  })

  it('Send only a valid password', () => {
    login.setPassword('admin123')
    login.clickLoginButton()
    login.dataRequiredAlert(true)

  })

  it('Send a valid username and password', () => {
    login.setUserName('Admin')
    login.setPassword('admin123')
    login.clickLoginButton()
    login.verifyLogin()

  })

  it('Sending valid username and password when hidden', () => {
    cy.fixture('orangeHrm').then((data) => {
      login.setUserName(data.userName)
      login.setPassword(data.password)
      login.clickLoginButton()
      login.verifyLogin()

    })

  })

  it('Fail test', () => {
    login.setUserName('Admin')
    login.setPassword('admin123')
    // login.clickLoginButton()
    login.verifyLogin()

  })

})