//Var

let firstname = "Pato"; 
let lastName = "QA";


// Export
export const dataPage = {

     

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
        return cy.get('table.form2 input[name="firstName"]').type('Juan');
  }

  /*  getTableRows: () => {
        return table.getTable().children().eq(2)
    }
*/
}