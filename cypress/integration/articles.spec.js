/// <reference types="cypress" />

import articles from '../support/pages/articles'

context('Publicação', () => {

    beforeEach(() => {
        // Preparação
        cy.backgroundLogin()
        articles.acessarFormularioDeNovaPublicacao();
    });

    it('Criar uma nova publicação', () => {
        // Ação
        articles.preencherFormulario();
        articles.submeterPublicacao();

        // Verificação
        articles.verificarSeAPublicacaoFoiCriadaComSucesso();

        // AAA -> Arrange   Act    Assert
        // PAV-> Preparação Ação Verificação
    });
});

// hooks -> momentos antes e depois do teste
// before / beforeEach
// after / afterEach