/// <reference types="cypress" />

const faker = require('faker');  

const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Cadastro {  

    acessarPaginaCadastrarNovoRegistro(){
        // acessarPaginaCadastrarNovoRegistro
        cy.visit('register');
    }

    preencherFormulario(){
        // preencherFormulario
        cy.get(el.inputUsername).type(faker.name.firstName() + faker.name.lastName());
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type('12345678');
    }

    submeterFormulario(){
        // submeterFormulario
        cy.get(el.buttonSubmit).click();
    }

    verificarSeOCadastroFoiRealizadoComSucesso() {
        cy.wait(`@${Routes.as.postUsers}`).then((postUsers) => {
            expect(postUsers.status).to.eq(200)
        });

        cy.wait(`@${Routes.as.getTags}`).then((getTags) => {
            expect(getTags.status).to.eq(200)
        });

        cy.wait(`@${Routes.as.getFeed}`).then((getFeed) => {
            expect(getFeed.status).to.eq(200)
        });
    }

}

export default new Cadastro();