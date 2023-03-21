/// <reference types="cypress" />
describe('dropdown', function () {
    // it function to identify test
    it('Scenario 1', function (){
       // test step to launch a URL
       cy.visit("https://register.rediff.com/register/register.php")



       // Select by Text
       cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(2)').select("DEC").should('have.value', '12')
       //select option India with value then verify with assertion

       //cy.get('select[id="country"]').select('12').should('have.value', '12')

       //Index - no quotes 
       cy.get('select[id="country"]').select(3).should('have.value', '5')



    })
 })