import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../pages/homePage';
import CategoryandProductPage from '../pages/categoryandproductPage';
import CartPage from '../pages/cartPage';

const homePage = new HomePage();
const categoryandproductPage = new CategoryandProductPage();
const cartPage = new CartPage();

Given('the Application is started', () => {
    homePage.visit();
});

When('search the page on Google', function() {
    homePage.gotoPage();
});

When('search item on HepsiBurada', function() {
    categoryandproductPage.searchItem();
});

When('select item randomly', function() {
    categoryandproductPage.itemRandomly();
});

When('select product randomly', function() {
    categoryandproductPage.productRandomly();
});

And('like the product', function() {
    categoryandproductPage.likeItem();
});

Then('check the page navigation', () => {
    categoryandproductPage.navigateLogin();
});

When('select category and sub-category randomly', function() {
    categoryandproductPage.categoryRandomly();
    categoryandproductPage.subCategoryRandomly();
});

Then('check the price of product', function() {
    cartPage.getProductPrice();
});

And('add the product then go to the cart', function() {
    cartPage.addCart();
    cartPage.gotoCart();
});

Then('verify the both of the prizes', function() {
    cy.get('@productPrice').then(productPrice => {
        cartPage.verifyPrices(productPrice);
    });
});
