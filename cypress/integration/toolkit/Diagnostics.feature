Feature: Diagnostics Scenarios
    Scenario: All systems ok - Good news
        When I access the environment monitoring URL
        Then the environment status should read "Good News"
