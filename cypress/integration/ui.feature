Feature: Ui Scenarios

    Scenario: Search then like a product
        Given the Application is started
        When search the page on Google
        When search item on HepsiBurada
        When select item randomly
        And like the product
        Then check the page navigation

    Scenario: Select then add the product to the cart
        Given the Application is started
        When search the page on Google
        When select category and sub-category randomly
        When select product randomly
        Then check the price of product
        And add the product then go to the cart
        Then verify the both of the prizes
