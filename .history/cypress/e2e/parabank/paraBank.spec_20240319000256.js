import { dataPage } from "../../components/paraBank";

describe('Manage page', () => {
   
    it('manejo de dom', () => {
 
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
       // dataPage.getUserName();
       // dataPage.getPass();
       // dataPage.getButtonLogi();
       dataPage.getCreateCta();
      // dataPage.getFisrtname();
      // cy.get('table.lookupForm input[name="lastName"]').type('Pérez');
       cy
  .get('input[name="lastName"]')
  .invoke('val') 
  .then(text => {
    const someText = text;
    cy.log(someText);
  });
        
    });

});