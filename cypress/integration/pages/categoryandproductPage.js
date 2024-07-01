class CategoryandProductPage {

    searchBoxSelector = '.searchBoxOld-M1esqHPyWSuRUjMCALPK';
    searchInputSelector = 'div[role="combobox"] > .theme-IYtZzqYPto8PhOx3ku3c';
    dropdownToggleSelector = '[data-test-id="dropdown-toggle"]';
    usernameInputSelector = 'input#txtUserName';
    passwordInputSelector = 'input#txtPassword';
    addedToListNotificationSelector = 'Ürün listenize eklendi.';
    categorySelector = '.sf-MenuItems-lAm2QqXd81oR9dqk50g2 > .sf-MenuItems-MXhuaBP08HFYcFicDzFl > li';
    subCategorySelector = 'ul > li > ul > li > .sf-ChildMenuItems-xEXsQvaJD0cslMw9rBZM > li > .sf-ChildMenuItems-OIXGN6gTcuAXz_dkh8Yv';
    productListSelector = '[data-test-id="loader-false"] .productListContent-tEA_8hfkPU5pDSjuFdKG .productListContent-pXUkO4iHa51o_17CBibU > ul > li';

    searchItem() {
        cy.get(this.searchBoxSelector).click();
        cy.get(this.searchInputSelector).type('Bilgisayar {enter}');
        cy.get(this.dropdownToggleSelector).should('be.visible');
    }

    itemRandomly() {
        cy.get('a:visible').then($products => {
            const randomProduct = Cypress._.sample($products);
            cy.wrap(randomProduct).invoke('removeAttr', 'target').click();
        });
    }

    likeItem() {
        cy.contains("Beğen").click({ force: true });
    }

    navigateLogin() {
        cy.get(this.usernameInputSelector).should('be.visible');
        cy.get(this.passwordInputSelector).should('be.visible');
        cy.contains(this.addedToListNotificationSelector).should('not.exist');
    }

    categoryRandomly() {
        cy.get(this.categorySelector).then($categories => {
            const randomCategory = Cypress._.sample($categories);
            cy.wrap(randomCategory).click();
        });
    }

    subCategoryRandomly() {
        cy.get(this.subCategorySelector).then($subcategories => {
            const randomSubcategory = Cypress._.sample($subcategories);
            cy.wrap(randomSubcategory).click();
        });
    }

    productRandomly() {
        cy.get(this.productListSelector).then($products => {
            const randomProduct = Cypress._.sample($products);
            cy.wrap(randomProduct).find('a').invoke('removeAttr', 'target').click();
        });
    }
}

export default CategoryandProductPage;
