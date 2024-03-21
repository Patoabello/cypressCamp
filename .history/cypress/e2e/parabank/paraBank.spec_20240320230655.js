import { dataPage } from "../../components/paraBank";

const Papa = require('papaparse');

describe('register', () => {
  
    it('create user', () => {
 
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
        cy.get('h1').should('exist');
        cy.get('h1').first().should('have.text', 'Contact List App')

        dataPage.getCreateCta();
            
        dataPage.getFisrtname();
        dataPage.getInputLastName();
        dataPage.getInputEmail();
        dataPage.getInpuPassWord();
        dataPage.getButtonReg();
        dataPage.getAddContact();
   
    });

    it('debería permitir trabajar con los datos de cada fila', () => {
       // https://www.youtube.com/watch?v=8h1pUyVHqn0 
      });


});