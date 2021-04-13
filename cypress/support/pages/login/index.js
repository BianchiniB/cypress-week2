const el = require('./elements').ELEMENTS

class Login {

    acessarLogin() {
        // acessar página de login
        cy.visit('login');
    }

    preencherFormulario(){
        // preencher formulário
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type('12345678');
    }

    submeterFormulario(){
        // submeter formulário de login
        cy.get(el.buttonSubmit).click();
    }

}

export default new Login();