import { dataPage } from '../../components/paraBank';
import { dataRegitrer } from '../../components/paraBank';


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

  it('Home page', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/'); 
    cy.get('h1').should('exist');
    cy.get('h1').first().should('have.text', 'Contact List App')
    dataPage.getCreateCta();
    dataPage.getFisrtname();
    dataPage.getInputLastName();
    dataPage.getInputEmail();
    dataPage.getInpuPassWord();
    dataPage.getButtonReg();
});

it('Contact list', () => {
    dataPage.getAddContact();
    cy.get('h1').should('exist');
    cy.get('h1').first().should('have.text', 'Add Contact')
    dataRegitrer.getRegFisrtname();


})
    
/*
  it('Fill input fields using CSV data', () => {
    const randomRow = Math.floor(Math.random() * table.length)

    cy.get('.contact-name input').type(table[randomRow]['name'])
    cy.get('.contact-email input').type(table[randomRow]['email'])
    cy.get('.contact-phone input').type(table[randomRow]['phone'])
    cy.get('.contact-message textarea').type(table[randomRow]['message'])
*/

 // });
});
