
export default {
    acessarCadastroUsuario() {
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-lock')
        .click()

        
    }
}

