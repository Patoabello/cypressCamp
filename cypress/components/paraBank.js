//Var
import { Faker } from '@faker-js/faker';


const { faker } = require('@faker-js/faker');
let firstname = "Pato"; 
let lastName = "QA";

// faker  
let street = faker.location.street();
let city = faker.location.city();
let state = faker.location.state();
let zipCode = faker.location.zipCode();
let phone = faker.phone.number();
let ssn = faker.datatype.number();

let userName = firstname + " " + lastName;
let passWord = state;

// Export
export const dataPage = {

     

    getUserName:() => {
    // Login

        return cy.get('[name="username"]').click().type('Pato')
    },
    getPass:() => {
        return cy.get('[name="password"]').type('1234')
    },
    getButtonLogi:() => {
        return cy.get('[value="Log In"]').click()
    },

    
    // Registro
    getCreateCta:() => {
        return cy.contains('Register').click();
    },
    
    getFisrtname:() => {
        return cy.get('[id="customer.firstName"]').type(firstname);
  },
   
    getInputLastName: () => {
        return cy.get('[id="customer.lastName"]').type(lastName);
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
    
    getInputPhone: () => {
        return cy.get('[id="customer.phoneNumber"]').type(phone);
    },
    getInputSsn: () => {
        return cy.get('[id="customer.ssn"]').type(ssn);
    },

    getInpuUserName: () => {
        return cy.get('[id="customer.username"]').type(userName);
    },

    getInpuPassWord: () => {
        return cy.get('[id="customer.password"]').type(passWord);
    },

    getInpuConfirm: () => {
        return cy.get('[id="repeatedPassword"]').type(passWord);
    },

    getButtonReg: () => {
        return cy.get('[colspan="2"] > .button').click();
    },

}
