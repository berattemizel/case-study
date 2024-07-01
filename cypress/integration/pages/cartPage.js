class CartPage {
    
    offeringPriceSelector = '#offering-price';
    currentPriceBeforePointSelector = 'span#offering-price > span:nth-of-type(1)';
    currentPriceAfterPointSelector = 'span#offering-price > span:nth-of-type(2)';
    addToCartButtonSelector = 'button#addToCart';
    cartNotificationSelector = 'Ürün sepetinizde';
    gotoCartButtonSelector = 'Sepete git';
    basketPaidPriceSelector = '#basket_payedPrice span';

    getProductPrice() {
        cy.get(this.offeringPriceSelector).should('be.visible');
        cy.get(this.currentPriceBeforePointSelector).invoke('text').then(priceFirst => {
            cy.get(this.currentPriceAfterPointSelector).invoke('text').then(priceSecond => {
                const fullPrice = `${priceFirst.trim()},${priceSecond.trim()}`;
                cy.wrap(fullPrice).as('productPrice');
            });
        });
    }

    addCart() {
        cy.get(this.addToCartButtonSelector).click();
        cy.contains(this.cartNotificationSelector).should('exist');
    }

    gotoCart() {
        cy.contains(this.gotoCartButtonSelector).click();
    }

    verifyPrices(expectedPrice) {
        cy.get(this.basketPaidPriceSelector).invoke('text').then(cartPriceText => {
            const cartPrice = cartPriceText.trim();
            expect(cartPrice).to.equal(expectedPrice);
        });
    }
}

export default CartPage;
