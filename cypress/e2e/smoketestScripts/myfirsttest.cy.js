import LoginPage from '../../Pages/loginpage.po'
import Dashboardpage from "../../Pages/dashboardpage.po"
import logindata from '../../fixtures/logincreds.json'

const login = new LoginPage()
const dashbaord = new Dashboardpage()

describe(`Verify Login functionality`, () => {

  it(`Validate login with valid creds`, () => {

      //cy.viewport("iphone-5", "landscape")
    cy.visit('/')
     
    //Actions
    cy.login(Cypress.env("username"), Cypress.env("Password"))
    // Assertions
    cy.contains(dashbaord.dashboardheader()).should("be.visible")
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")


 
    
  })

  it('Verify login with Valid username and invalid password', () => {


   // cy.viewport(375,667)

    cy.visit('/web/index.php/auth/login')

        //Actions
      cy.login(logindata.username, logindata.wrongpassword)
        //assertion

        cy.xpath(login.loginerrormessage()).should("be.visible")

  })

  it('Verify login with invalid username and valid password', () => {

    //cy.viewport(375,667)

    cy.visit('/web/index.php/auth/login')

        //Actions
       cy.login(logindata.wrongusername, logindata.wrongpassword)

        //assertion

        cy.xpath(login.loginerrormessage()).should("be.visible")

  })
})