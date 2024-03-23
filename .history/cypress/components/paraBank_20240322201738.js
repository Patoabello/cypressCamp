//Var
import { Faker } from '@faker-js/faker';


const { faker } = require('@faker-js/faker');
let firstname = "Pato"; 
let lastName = "QA";


// faker  
let email = faker.internet.email();
let state = faker.location.state();
const birthdateBase = faker.date.between('1990-01-01', '2022-12-31');
let birthdate = birthdateBase.toISOString().split('T')[0];




let userName = firstname + " " + lastName;
let passWord = "jugodepera";

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
        return cy.get('#signup').click();
    },
    
    getFisrtname:() => {
        return cy.get('[id="firstName"]').type(firstname);
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
    }
//---
    

}