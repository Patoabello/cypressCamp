//Var

let firstname = "Pato"; 
let lastName = "QA";
let street = "Los Lilenes 2124";
let city = "Los Angeles";
let state = "California";
let zipCode = "2365";
let ssn = "123";



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
    },

    getInputState: () => {
        return cy.get('[id="customer.address.state"]').type(state);
    },

    getInputZipCode: () => {
        return cy.get('[id="customer.address.zipCode"]').type(zipCode);
    },
    
    getInputSsn: () => {
        return cy.get('[id="customer.ssn"]').type(ssn);
    },

}