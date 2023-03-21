///<reference types="cypress"/>

describe('Automation - File Upload Example', function () {

    it('Cypress Test Case - Understanding upload file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     // cy.xpath('//input[@name="upfile"]').attachFile('module1/test4.txt');
      
      cy.fileupload("//input[@name='upfile']",'module1/test4.txt')

      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible")
    })


    it('Cypress Test Case - Understanding download file ', function () {
  
      cy.downloadFile("https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/113/000/original/logo_landscape_(1).png?1643756332", "cypress/downloads", "cypresslogo.png")
    })

  })