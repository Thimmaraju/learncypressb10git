import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import data from '../../fixtures/logincreds.json'

import LoginPage from "../../Pages/loginpage.po"

const login = new LoginPage()

Given('User launch the Application', () => {

    cy.visit("/")
    
  })



  When(`User enter valid username {string} and Valid Password {string}`, (username, password) => {

       cy.xpath(login.usernameInput()).type(username)
       
       cy.xpath(login.passwordInput()).type(password)
    
  })


  When('User click on Login Button', () => {

     cy.xpath(login.loginBtn()).click()
    
  })


  
  Then('User should be navigated to dashbaord', () => {

   cy.url().should("eq", data.dashboardurl)
   
 })