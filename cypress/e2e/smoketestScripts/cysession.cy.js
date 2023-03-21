import LoginPage from '../../Pages/loginpage.po'

const login = new LoginPage()

describe('Validate Orange HRM Login functionality', function() {


  beforeEach(function(){   

   cy.session( "login", () =>{
        cy.visit("/web/index.php/auth/login")
         cy.xpath(login.usernameInput()).type("Admin")
        cy.xpath(login.passwordInput()).type("admin123")
        cy.xpath(login.loginBtn()).click()
  })

  })

  it('Validate login with Valid credentials ', function () {


   cy.visit("/web/index.php/pim/viewEmployeeList");

   
    // cy.url().should('include',"/web/index.php/dashboard/index" )
    // //or
    // //cy.location().its('href').should('include',"/web/index.php/pim/viewEmployeeList" )
   
  })

  it('Validate timesheet page ', function () {


    cy.visit("/web/index.php/time/viewEmployeeTimesheet")

    cy.wait(3000)

    //cy.contains("Time").click()


  })

  it('Validate Myinfo page ', function () {


    cy.visit("/web/index.php/pim/viewMyDetails")
    cy.wait(3000)
    
  })

  it('Validate Employee report ', function () {


    cy.visit("/web/index.php/time/displayEmployeeReportCriteria")
    cy.wait(3000)

    cy.xpath('(//input[@placeholder="Type for hints..."])[2]').type("Raju")
    
  })

  
  it('Attendance Total Summary Report', function () {


    cy.visit("web/index.php/time/displayAttendanceSummaryReportCriteria")
    cy.wait(3000)
    //cy.xpath('(//input[@placeholder="Type for hints..."])[2]').type("Raju")
    
  })

  it('Add vacancy', function () {


    cy.visit("web/index.php/recruitment/addJobVacancy")
    cy.wait(3000)
    //cy.xpath('(//input[@placeholder="Type for hints..."])[2]').type("Raju")
    
  })
  
})


