import Locators from './LoginLocators.js';

class Login {

    setUserName(username) {
        cy.get(Locators.inputUserName)
            .should('be.visible')
            .type(username)
            .should('have.value', username)

    }

    setPassword(password) {
        cy.get(Locators.inputPassword)
            .should('be.visible')
            .type(password)
            .should('have.value', password)
    }

    clickLoginButton() {
        cy.get(Locators.loginButton)
            .should('be.visible')
            .click()
    }

    credencialAlert(isVisible) { // valida se o alerta de credencial invalida esta : sendo mostrado(true) ou nao esta sendo mostrado (false)
        const assertion = isVisible ? 'be.visible' : 'not.be.visible'

        cy.get('p')
            .contains('Invalid credentials')
            .should(assertion)
    }

    dataRequiredAlert(shouldBeVisible) {
        const assertion = shouldBeVisible ? 'be.visible' : 'not.be.visible';

        cy.get('span')
            .contains('Required')
            .should(assertion);
    }

    verifyLogin() {
        cy.get('h6')
            .contains('Dashboard')
            .should('be.visible')
    }

}
const login = new Login();

export default login;
