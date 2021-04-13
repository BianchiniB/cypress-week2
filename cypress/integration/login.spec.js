/// <reference types="cypress" />

import login from '../support/pages/login'

context('Login', () => {
    it('Realizar o login no sistema com sucesso', () => {

        login.acessarLogin();
        login.preencherFormulario();
        login.submeterFormulario();

        // Verificação
    });
});