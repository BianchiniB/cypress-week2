/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro';

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        cadastro.acessarPaginaCadastrarNovoRegistro();
        cadastro.preencherFormulario();
        cadastro.submeterFormulario();
        
        // Verificação
        cadastro.verificarSeOCadastroFoiRealizadoComSucesso();
    });
});