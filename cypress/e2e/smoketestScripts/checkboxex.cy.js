describe('checkbox Test', function () {

   it('Working with Check boxes', function () {

      cy.visit("https://register.rediff.com/register/register.php");

      cy.xpath('//input[starts-with(@name,"chk_altemail")]').check().should('be.checked');

      cy.wait(10000)

      cy.xpath('//input[starts-with(@name,"chk_altemail")]').uncheck().should('not.be.checked');

      //  //Radio 

      cy.xpath('//input[@value="f"]', { timeout: 20000 }).check().should('be.checked');

      //Uncheck will not work for Radio

      //  //Dropdowns

      cy.xpath('//select[starts-with(@name,"DOB_Month")]').select(7)


   });
});