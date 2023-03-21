import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";



Given('User launch the Heroku Application', () => {

    cy.visit("https://the-internet.herokuapp.com/login")

})


When(`User enter invalid username {string} inalid Password {string}`, (username, password) => {

    cy.get('#username').type(username)
    cy.get('#password').type(password)

})


When('User click on Heroku App Login Button', () => {

    cy.get('.radius').click()

})



Then('User should get error message', () => {

    cy.get('#flash').should('be.visible')

})