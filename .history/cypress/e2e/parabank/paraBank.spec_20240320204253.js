import { dataPage } from "../../components/paraBank";



describe('Manage page', () => {
  
    it('manejo de dom', () => {
 
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
        cy.get('h1').should('exist');
        cy.get('h1').first().should('have.text', 'Contact List App')

        dataPage.getCreateCta();

       // dataPage.getUserName();
       // dataPage.getPass();
       // dataPage.getButtonLogi();
       
     
      dataPage.getFisrtname();
      dataPage.getInputLastName();
      dataPage.getInputEmail();


      /*  dataPage.getInputAddress();
       

       dataPage.getInpuUserName();
       dataPage.getInpuPassWord();
       dataPage.getInpuConfirm();
      */
       
        
    });

});