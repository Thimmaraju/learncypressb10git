

describe('Multiple ', () => {
 
    it('Multiple elememts click', () => {

        cy.visit(Cypress.env("clienturl"))
        cy.xpath("//button[text()='ADD TO CART']").click({multiple : true})

        cy.wait(5000)

        cy.xpath("//button[text()='ADD TO CART']").click({multiple : true})
    })
  })
