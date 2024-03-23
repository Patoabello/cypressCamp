import { dataPage } from "../../components/paraBank";

const neatCSV = require('neat-csv');

describe('register', () => {
  let table;

    

        Before(() => {
            cy
                .fixture('datos.csv')
                .then(neatCSV)
                .then(data => {
                    table = data;
                })
                .then(console.table)

            })
        
        });
        
    it('read pag', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
        cy.get('h1').should('exist');
        cy.get('h1').first().should('have.text', 'Contact List App')

    });    

      /*  dataPage.getCreateCta();
            
        dataPage.getFisrtname();
        dataPage.getInputLastName();
        dataPage.getInputEmail();
        dataPage.getInpuPassWord();
        dataPage.getButtonReg();
        dataPage.getAddContact();
        */
   
   
 

