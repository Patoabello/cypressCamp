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
   for (let i=0; i<3; i++){ 
    const randomRow = Math.floor(Math.random() * table.length);
    
    dataPage.getAddContact();
    cy.get('h1').should('exist');
    cy.get('h1').first().should('have.text', 'Add Contact')
    dataRegitrer.getRegFisrtname().type(table[randomRow]['Name']);
    dataRegitrer.getRegLastName().type(table[randomRow]['Lastname']);
    dataRegitrer.getRegBirth().type(table[randomRow]['Birthdate']);
    dataRegitrer.getRegEmail().type(table[randomRow]['Email']);
    dataRegitrer.getRegPhone().type(table[randomRow]['Phone']);
    dataRegitrer.getRegStreet().type(table[randomRow]['Address']);
    dataRegitrer.getRegCity().type(table[randomRow]['City']);
    dataRegitrer.getRegProvince().type(table[randomRow]['Province']);
    dataRegitrer.getRegPostalCode().type(table[randomRow]['Postal Code']);
    dataRegitrer.getRegCountry().type(table[randomRow]['Country']);

    dataRegitrer.getRegSubmit();

}

})
    

});
