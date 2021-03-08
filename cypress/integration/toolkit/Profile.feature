Feature: Profile
    Background: Logged in and main page view
        Given I am logged in and can see the main page

    Scenario: My Profile Page
        When I access My Profile page
        Then I can see my personal details
        And I see "My Profile" in the title