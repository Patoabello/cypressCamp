import { dataPage } from "../../components/paraBank";

const neatCSV = require('neat-csv');

describe('register', () => {
  let table;

    it('create user', () => {
 
        

        Before(() => {
            cy
                .fixture('datos.csv')
                .then(neatCSV)
                .then(data => {
                    table = data;
                })

        })

    it('read pag', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
        cy.get('h1').should('exist');
        cy.get('h1').first().should('have.text', 'Contact List App')

    })    

      /*  dataPage.getCreateCta();
            
        dataPage.getFisrtname();
        dataPage.getInputLastName();
        dataPage.getInputEmail();
        dataPage.getInpuPassWord();
        dataPage.getButtonReg();
        dataPage.getAddContact();
        */
   
    });

   /* it('debería permitir trabajar con los datos de cada fila', () => {
       // https://www.youtube.com/watch?v=8h1pUyVHqn0 
      });
    */  

});