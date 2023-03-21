Feature: Verify Login Functionality

    This suite is for verifying Heroku App Login Functionality.

    Scenario Outline: Login with InValid Creds

        Given User launch the Heroku Application
        When  User enter invalid username '<username>' inalid Password '<password>'
        And User click on Heroku App Login Button
        Then  User should get error message

        Examples:
            | username | password   |
            | raju1234 | raju123456 |
            