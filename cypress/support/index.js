// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add('backgroundLogin', () => {
// PROCESSO DE LOGIN EM BACKGROUND
// 1. Realizar uma requisição do tipo POST com email e senha
// 2. Capturar o token que é recebido da nossa requisição
// 3. Usar o token recebido para salvar no localstorage
    cy.request({
        method: 'POST',
        url: `${Cypress.config().apiUrl}users/login`,
        body: {
            user:{
                email: "agilizei-rwc@mail.com",
                password: "12345678"
            }    
        }
    }).then((loginResponse) => {
        console.log(loginResponse.body)
        cy.log(loginResponse.body.user.token)
    
        cy.visit('/', {
            onBeforeLoad: (win) => {
                win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
            }
        })
    })
})

import Routes from '../support/routes'

before(() =>{
Routes.init()
})