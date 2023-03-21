///<reference types="cypress"/>

describe('Automation - Write file and Read file ', function () {

    it.only('Cypress Test Case - Write file example', function () {

        
        cy.writeFile('cypress/module1/test4.txt', "Raju\n")
     
    })

    it.only('Cypress Test Case - Append Data in end to the file ', function () {
        
        cy.writeFile('cypress/fixtures/module1/test4.txt', "Cypress Trainer",{flag: 'a+'});
     
    })

    it.only('Cypress Test Case - Create Json file ', function () {
        
        cy.writeFile('cypress/fixtures/module2/test6.json', { firstname: 'G', lastname: 'Raju'});
     
    })

    it.only('Cypress Test Case - Validation of Data both Text file and Json ', function () {
        
        cy.readFile('cypress/fixtures/PIM/registerflowdata.json').should('exist')

        cy.readFile('cypress/fixtures/registerflowcharan.json').its('username').should('eq','Charan1234')

         cy.readFile('cypress/fixtures/module2/test6.json').its('firstname').should('eq','G')

         cy.readFile('cypress/fixtures/module1/test4.txt').should('contain','Raju');

        cy.readFile('cypress/fixtures/module1/test4.txt').should('contain','Cypress Trainer')       
    })

  })