Feature: API Test
    
    Scenario: Check GET Returns options for a client library endpoint
        Given I make a GET request to "/gen/clients/ada"
        Then I should get a successful response

    Scenario: Check GET Returns options for a server framework endpoint
        Given I make a GET request to "/gen/servers/ada-server"
        Then I should get a successful response

    Scenario: Check POST Generates a client library endpoint
        Given I make a POST request to "/gen/clients/ada" with body
        Then I should get a successful response

    Scenario: Check POST Generates a server library endpoint
        Given I make a POST request to "/gen/servers/ada-server" with body
        Then I should get a successful response