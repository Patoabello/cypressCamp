export const dataPage = {

    fisrtname = "Pato"   

    getUserName:() => {

        return cy.get('[name="username"]').click().type('Pato')
    },
    getPass:() => {
        return cy.get('[name="password"]').type('1234')
    },
    getButtonLogi:() => {
        return cy.get('[value="Log In"]').click()
    },

    getCreateCta:() => {
        return cy.contains('Register').click();
    },
    getFisrtname:() => {
        return cy.contains('#fisrtname').click();
    }


}