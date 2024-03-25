import { dataPage } from '../../components/contactList';
import { dataRegitrer } from '../../components/contactList';


const neatCSV = require('neat-csv'); // biblioteca q convierte el csv a obj.

describe('Read CSV', () => {
  let table;

  before(() => {
    cy
      .fixture('datos.csv')
      .then(neatCSV) // ctransformo el csv en un objecto
      .then(data => {
        table = data;
      })
      .then(console.table) // muestro el objeto por consola en la pag para confirmar los datos
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
   // cy.get('h1').should('exist');
   // cy.get('h1').first().should('have.text', 'Add Contact');
    dataPage.getAddContact();


   for (let i=0; i<3; i++){ 
    const randomRow = Math.floor(Math.random() * table.length); // Recorro de forma random las columnas para selecionar datos
        
   
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
     cy.get('h1').should('exist');
    cy.get('h1').first().should('have.text', 'Contact List');
    cy.get('[id="add-contact"]').should('be.visible').click();
   
}
cy.get('[id="cancel"]').click(); // salgo de ciclo ya que se han agregado los 3 contactos.

})
    

});
