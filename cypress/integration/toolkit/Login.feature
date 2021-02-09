Feature: Login Scenarios
    Scenario: Regular Login
        Given I access login url
        When I enter valid credentials
        And I click the sign in button
        Then I succesfully log in
        And I see "Welcome" in the title