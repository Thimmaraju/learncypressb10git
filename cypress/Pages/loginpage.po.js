class LoginPage{

      loginwithcredentials(username, password){

        cy.xpath(this.usernameInput()).type(username);
    
        cy.get(this.passwordInput()).type(password);
        cy.get(this.loginBtn()).click();
      }

       usernameInput(){

        return "//input[@placeholder='Username']"
       }

      passwordInput(){

        return '//input[@type="password"]'
       }

       loginBtn(){

        return '//button[@type="submit"]'
       }

       loginerrormessage(){

        return "//p[text()='Invalid credentials']"
       }
}

export default  LoginPage;