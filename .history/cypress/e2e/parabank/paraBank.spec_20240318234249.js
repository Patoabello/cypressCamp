import { dataPage } from "../../components/paraBank";

describe('Manage page', () => {
   
    it('manejo de dom', () => {
 
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
       // dataPage.getUserName();
       // dataPage.getPass();
       // dataPage.getButtonLogi();
       dataPage.getCreateCta();
       dataPage.getFisrtname();
       cy.get('table.form2 input[name="firstName"]').then((input) => {
    // Aquí puedes realizar acciones con el input capturado
    // Por ejemplo, escribir en él
    cy.wrap(input).type('Juan');
  });
        
    });

});