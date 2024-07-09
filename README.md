# Hepsiburada Automation Project

This project is created using Cypress to automate certain scenarios on the Hepsiburada website.

## Installation

Follow the steps below to set up the project:

1. **Clone the repository:**
    ```sh
    git clone [<repo-url>](https://github.com/berattemizel/case-study-cypress.git)
    cd case-study-cypress
    ```

2. **Install the required packages:**
    ```sh
    npm install
    ```

## Usage

You can use the following commands to run the project:

1. **Start the tests:**
    ```sh
    npx cypress open
    ```

    This command will open the Cypress GUI where you can manually run the tests.

2. **Run the tests in headless mode:**
    ```sh
    npx cypress run
    ```

## Test Scenarios

### UI Tests

#### Scenario 1

1. Visit the Hepsiburada.com website.
2. Perform a search (Example: "iphone").
3. From the search results, select a product and go to the product detail page. (The searched products are stored in an array, one of them is randomly selected, and navigated to it.)
4. On the selected product page, click the "Like" button. (If the product is already in the liked list, no action is taken.)
5. Verify the process.

#### Scenario 2

1. Visit the Hepsiburada.com website.
2. Randomly select a category and click on a subcategory under that category.
3. From the product list, select a product and go to the product detail page. (The listed products are stored in an array, one of them is randomly selected, and navigated to it.)
4. On the selected product page, verify the product price.
5. Add the product to the cart.
6. Verify that the price on the product page matches the price in the cart.

### API Tests

1. Write an API test that verifies the response status (http status). Example URL: `http://generator.swagger.io`
2. For a GET and a POST endpoint of your choice, the HTTP status code should be 200 to be considered successful; otherwise, it should be considered unsuccessful.
3. When making an example API call, carry a sample value through a variable and use it in an example GET request.


## Extras

- Configure the tests to run on Chrome and Firefox browsers.
- Add reporting for the test results.
- Take screenshots and video when a test step fails.
