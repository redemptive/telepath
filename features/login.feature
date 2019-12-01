Feature: Login
  As a user
  To use the service
  I want to be able to login
 
  Scenario: Successful Login
    Given I load the login page
    When I enter the email address "ewan@ewan12.com"
    When I enter the password "SecurePass1!"
    When I click submit
    Then I should see the dashboard page