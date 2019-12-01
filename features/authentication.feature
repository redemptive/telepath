Feature: Register
  As a user
  To use the service
  I want to be able to register
 
  Scenario: Successful Registration
    Given I load the registration page
    When I enter the email address "ewan@ewan12.com"
    When I enter the name "Ewan Person"
    When I enter the password "SecurePass1!"
    When I click submit
    Then I should see the login page

  Scenario: Failed Registration (duplicate user)
    Given I load the registration page
    When I enter the email address "ewan@ewan12.com"
    When I enter the name "Ewan Person"
    When I enter the password "SecurePass1!"
    When I click submit
    Then I should see an error alert box

  Scenario: Failed Registration (insecure password)
    Given I load the registration page
    When I enter the email address "notasecureguy@insecure.com"
    When I enter the name "Insecure"
    When I enter the password "InsecurePass"
    When I click submit
    Then I should see an error alert box

  Scenario: Failed Registration (invalid email)
    Given I load the registration page
    When I enter the email address "notarealemailyouknow"
    When I enter the name "Suspect Dude"
    When I enter the password "SecurePass1!"
    When I click submit
    Then I should see an error alert box