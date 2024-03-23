import { dataPage } from "../../components/paraBank";

const neatCSV = require('neat-csv');

describe('Read CSV', () => {
  let table;

    

  before(() => {
    cy
      .fixture('datos.csv')
      .then(neatCSV) // convert csv file into an object
      .then(data => {
        table = data;
      })
      .then(console.table)
  });

    it('read pag', () => {
        cy.visit('https://practice.automationbro.com/contact/');
        /*
        cy.log('segundo log')
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
        cy.get('h1').should('exist');
        cy.get('h1').first().should('have.text', 'Contact List App')
*/
    });    

      /*  dataPage.getCreateCta();
            
        dataPage.getFisrtname();
        dataPage.getInputLastName();
        dataPage.getInputEmail();
        dataPage.getInpuPassWord();
        dataPage.getButtonReg();
        dataPage.getAddContact();
        */
   
   
 

