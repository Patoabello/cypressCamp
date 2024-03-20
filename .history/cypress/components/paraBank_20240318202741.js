export const dataPage = {

  

    getUserName:() => {

        return cy.get('[data-np-autofill-field-type="username"]').click().type('Pato')
    },

    getPass:() => {
        return cy.get('[name="password"]').type('1234')
    },

    getButtonLogi:() => {
        return cy.get('[value="Log In"]').click()
    },

}