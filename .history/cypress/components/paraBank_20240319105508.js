//Var

let firstname = "Pato"; 
let lastName = "QA";
let street = "Los Lilenes 2124";
let city = "Los Angeles";



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
        return cy.get('[id="customer.firstName"]').type(firstname);
  },

   
    getInputLastName: () => {
        return cy.get('[id="customer.lastName""]').type(lastName);
    },
    getInputAddress: () => {
        return cy.get('[id="customer.address.street"]').type(street);
    },
    getInputCity: () => {
        return cy.get('[id="customer.address.city"]').type(city);
    }

}