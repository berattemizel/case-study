import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ApiPage from '../pages/apiPage';

const apiPage = new ApiPage();

Given('I make a GET request to {string}', (endpoint) => {
    apiPage.getClientOptions(endpoint);
});

Then('I should get a successful response', () => {
    cy.get('@clientOptions').should('exist');
});

Given('I make a POST request to {string} with body', (endpoint) => {
    apiPage.postClient(endpoint);
});
