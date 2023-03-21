Feature: Verify Login Functionality

  This suite is for verifying Login Functionality of Positive and negative scenarios.

  Scenario: Login with Valid Creds

    Given User launch the Application
    When  User enter valid username "Admin" and Valid Password "admin123"
    And User click on Login Button
    Then  User should be navigated to dashbaord

  Scenario: Login with InValid Creds

    Given User launch the Application
    When  User enter invalid username "Ahcbdbcdmin" and InValid Password "admkvjfhin123"
    Then  User should get eerror message