///<reference types="cypress"/>

describe('Automation - Working With Iframes in webpage', function () {

    it('Cypress Test Case - Understanding Iframes in webpage', function () {
  
      cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_submit_get');

      cy.wait(5000);
      
      cy.get('#iframeResult').then(($iframe) =>{

        let  element = $iframe.contents().find('body > button');

        cy.wrap(element).click();
      })

      cy.get("#runbtn").click();

      //cy.get('body > button').click();

    
      
    })

  })