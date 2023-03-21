import LoginPage from "../../Pages/loginpage.po";

import data from '../../fixtures/logincreds.json'

const login = new LoginPage()

var creds = ["Admin", "admin123"]

describe(`Verify Login's "Raju" functionality`, () => {

  beforeEach(function () {

    //cy.viewport(375, 667)

    cy.visit('/web/index.php/auth/login')
    
  });



  it.only(`Validate login with valid creds`, () => {


    //Actions
    cy.xpath(login.usernameInput()).type(data.username);
    cy.get('input[type="password"]').type(data.password);
    cy.get('button[type="submit"]').click();
    // Assertions
   // cy.contains('Dashboard').should("be.visible")
    cy.url().should("eq", data.dashboardurl)


  })

  it('Verify login with Valid username and invalid password', () => {




    //Actions
    cy.get('input[name="username"]').type(data.username);
    cy.get('input[type="password"]').type(data.wrongpassword);
    cy.get('button[type="submit"]').click();

    //assertion

    cy.contains("Invalid credentials").should("be.visible")

  })

  specify('Verify login with invalid username and valid password', () => {
    let wrongpassword = "admfkbkjbnin123"


    //Actions
    cy.get('input[name="username"]').type(data.wrongusername);
    cy.get('input[type="password"]').type(data.wrongpassword);
    cy.get('button[type="submit"]').click();

    //assertion

    cy.contains("Invalid credentials").should("be.visible")

  })
})