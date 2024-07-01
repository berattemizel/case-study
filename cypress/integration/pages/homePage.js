class HomePage {

    searchInputSelector = '[name="q"]';
    hepsiburadaLinkText = "Türkiye'nin En Büyük Online Alışveriş Sitesi Hepsiburada.com";
    
    visit() {
        cy.visit('/');
    }

    gotoPage() {
        cy.get(this.searchInputSelector).type('hepsiburada.com {enter}');
        cy.contains(this.hepsiburadaLinkText).click();
    }
}

export default HomePage;
