import { dataPage } from "../../components/paraBank";

const neatCSV = require('neat-csv');

describe('Read CSV', () => {
  let table;

    

        before(() => {
            cy.log('hola');
            cy.fixture('datos.csv').then(neatCSV).then(data => {
                    table = data;
                })
                cy.log(console.table);
                cy.log("aca estoy");

            })
        
        });

    it('read pag', () => {
        cy.log('segundo log')
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
   
   
 

