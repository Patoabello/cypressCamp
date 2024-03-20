import { dataPage } from "../../components/paraBank";

describe('Manage page', () => {
   
    it('manejo de dom', () => {
 
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
       // dataPage.getUserName();
       // dataPage.getPass();
       // dataPage.getButtonLogi();
       dataPage.getCreateCta();
       dataPage.getFisrtname();
       dataPage.getInputAddress();
       dataPage.getInputCity();
       dataPage.getInputState();
       //dataPage.getInputZipCode();
       dataPage.getInputPhone();
       dataPage.getInputSsn();
       dataPage.getInpuUserName();
       dataPage.getInpuPassWord();
       dataPage.getInpuConfirm();
      
       
        
    });

});