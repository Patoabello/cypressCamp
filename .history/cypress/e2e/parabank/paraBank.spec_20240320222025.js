import { dataPage } from "../../components/paraBank";



describe('register', () => {
  
    it('create user', () => {
 
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

    it('debería permitir trabajar con los datos de cada fila', () => {
        cy.fixture('datos.csv', 'utf8').then((contenidoCSV) => {
          // Parsear el contenido del CSV
          const resultado = Papa.parse(contenidoCSV, {
            header: true, // Considera la primera fila como encabezados de columna
            dynamicTyping: true, // Convierte los strings numéricos y booleanos a su tipo correspondiente
            skipEmptyLines: true, // Omite las líneas vacías
          });
    
          // Iterar sobre cada fila del CSV
          resultado.data.forEach((fila) => {
            // Aquí puedes trabajar con cada fila. Por ejemplo:
            cy.log(`Trabajando con la fila: ${JSON.stringify(fila)}`);
            
            // Suponiendo que tu CSV tiene columnas 'nombre' y 'edad', podrías hacer:
            // cy.log(`Nombre: ${fila.nombre}, Edad: ${fila.edad}`);
            
            // Aquí puedes incluir la lógica para interactuar con tu aplicación basada en los datos de cada fila.
          });
        });
      });


});