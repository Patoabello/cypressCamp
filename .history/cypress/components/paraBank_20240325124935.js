//Var
import { Faker } from '@faker-js/faker';


const { faker } = require('@faker-js/faker');
let firstname = "Pato"; 
let lastName = "QA";


// faker 
let name =  faker.person.firstName()
let email = faker.internet.email();
let state = faker.location.state();
const birthdateBase = faker.date.between('1990-01-01', '2022-12-31');
let birthdate = birthdateBase.toISOString().split('T')[0];




let userName = firstname + " " + lastName;
let passWord = "jugodepera";

// Export
export const dataPage = {

     
  // Login
    getUserName:() => {
          return cy.get('[name="username"]').click().type(name)
    },
    getPass:() => {
        return cy.get('[name="password"]').type('1234')
    },
    getButtonLogi:() => {
        return cy.get('[value="Log In"]').click()
    },

    
    // Registro
    getCreateCta:() => {
        return cy.get('#signup').click();
    },
    
    getFisrtname:() => {
        return cy.get('[id="firstName"]').type(name);
  },

    getInputLastName: () => {
        return cy.get('[id="lastName"]').type(lastName);
    },
    
    getInputEmail:() => {
        return cy.get('[id="email"]').type(email);
    },
   
    getInpuPassWord: () => {
        return cy.get('[id="password"]').type(passWord);
    },
   

    getButtonReg: () => {
        return cy.get('[id="submit"]').click();
    },

    getAddContact:() => {
        return cy.get('[id="add-contact"]').click();
    }

}

export const dataRegitrer = {
    getRegFisrtname:() => {
        return cy.get('[id="firstName"]');
    },
    getRegLastName: () => {
    return cy.get('[id="lastName"]');
    },

    getRegBirth:() => {
        return cy.get('[id="birthdate"]');
    },
    getRegLastName: () => {
        return cy.get('[id="lastName"]');
    },
    getRegEmail:() => {
        return cy.get('[id="email"]');
    },
    getRegPhone: () => {
        return cy.get('[id="phone"]');
    },
    getRegStreet: () => {
        return cy.get('[id="street1"]');
    },
    getRegCity: () => {
        return cy.get('[id="city"]');
    },
    getRegProvince: () => {
        return cy.get('[id="stateProvince"]');
    },
    getRegPostalCode: () => {
        return cy.get('[id="postalCode"]');
    },
    getRegCountry: () => {
        return cy.get('[id="country"]');
    },

    //Buttons
    getRegSubmit: () => {
        return cy.get('[id="submit"]').click();
    },
    
    getRegAddContact2: () => {
        return cy.get('[id="add-contact"]');
    }
//---
    

}