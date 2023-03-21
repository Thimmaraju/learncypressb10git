import Registrationpage from "../../Pages/registerpage.po";

const register = new Registrationpage()

describe('Verify Register functionality', function () {

    
    before(function () {
      cy.fixture('registerflowdata').then(function (data) {
        this.data = data;
      })
    })
  
    it('Verify Registration flow for registred user', function () {
  
      
      cy.visit('https://shop.demoqa.com/my-account/');
      cy.wait(2000)
      //cy.get(register.usernameinput()).type(this.data.username);

      cy.enterText(register.usernameinput(), this.data.username)
      cy.wait(2000)
     // cy.get('#reg_email').type(this.data.email);
     cy.enterText("#reg_email",this.data.email)
      cy.wait(2000)
      //cy.get('#reg_password').type(this.data.weakpassword)
      cy.enterText('#reg_password', this.data.weakpassword)
     
  
    //   //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior
      //cy.get('.woocommerce-Button').should('have.attr', 'disabled', 'disabled');


      cy.validateAttribute('//button[@name="register"]','disabled', 'disabled')
      
      //cy.get('locatoer').should('have.attr', 'attrname', 'attvalue');
      //or
     cy.get('.woocommerce-Button').should('be.disabled');
    cy.wait(2000)
      // Clicking on to register on the Website by entering new password 
      // cy.get('#reg_password').clear()
      // cy.wait(5000)
       cy.get('#reg_password').clear().type(this.data.strongpassword);
      cy.wait(2000)
    //   cy.wait(15000)
      // cy.get('.woocommerce-Button').click();

      cy.clickonelement('//button[@name="register"]')
  
    //   //Checking whether the Registration is successful and whether UserName is populated under login section
       cy.get('#username').should('have.value', this.data.username);

       //or

       cy.get('#username').should('have.attr', 'value', this.data.username);
     })


  })

