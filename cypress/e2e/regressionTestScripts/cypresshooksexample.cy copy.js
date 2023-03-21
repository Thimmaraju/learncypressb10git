

describe(`Hooks Example`, () => {


    before(function () {

        cy.log("Before 1st Test")
        
      });

      beforeEach(function () {

        cy.log("Before Each Test")
        
      });

      
      afterEach(function () {

        cy.log("After Each Test")
        
      });

      after(function () {

        cy.log("After all Test")
        
      });


    it("1st it block", () =>{

        cy.log("1st it block body")


    })

    it("2nd it block", () =>{

        cy.log("2nd it block body")


    })

    it("3rd it block", () =>{

        cy.log("3rd it block body")

    })


})