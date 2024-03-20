
describe('Manage page', () => {
   
    it('manejo de dom', () => {
 
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
        dataPage.getUserName();
        dataPage.getPass();
        dataPage.getButtonLogi();
       
        
    });

});