import { dataPage } from "../../components/paraBank";



describe('Manage page', () => {
  
    it('manejo de dom', () => {
 
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
       // dataPage.getUserName();
       // dataPage.getPass();
       // dataPage.getButtonLogi();
       dataPage.getCreateCta();
     
     /*  dataPage.getFisrtname();
       dataPage.getInputLastName();
       dataPage.getInputAddress();
       dataPage.getInputCity();
       dataPage.getInputState();
       dataPage.getInputZipCode();
       dataPage.getInputPhone();
       dataPage.getInputSsn();
       dataPage.getInpuUserName();
       dataPage.getInpuPassWord();
       dataPage.getInpuConfirm();
      */
       
        
    });

});