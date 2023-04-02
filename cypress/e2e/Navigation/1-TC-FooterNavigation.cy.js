///<reference types = "cypress" />



describe('Site navigation', () => {

    beforeEach(() => {
        cy.visit('/')
    })
        

    it('Verify footer links', () => {
        cy.linkText().contains('Sitemap').click()
        cy.get('h1').contains('Sitemap')
        cy.linkText().contains('Shipping & Returns').click()
        cy.get('h1').contains('Shipping & Returns')
        cy.linkText().contains('Privacy Notice').click()
        cy.get('h1').contains('Privacy policy')
        cy.linkText().contains('Conditions of Use').click()
        cy.get('h1').contains('Conditions of use') 
        cy.linkText().contains('About us').click()
        cy.get('h1').contains('About Us')
        cy.linkText().contains('Contact us').click()
        cy.get('h1').contains('Contact Us')
        cy.linkText().contains('Search').click()
        cy.get('h1').contains('Search')
        cy.linkText().contains('News').click()
        cy.get('h1').contains('News')
        cy.linkText().contains('Blog').click()
        cy.get('h1').contains('Blog')
        cy.linkText().contains('Recently viewed products').click()
        cy.get('h1').contains('Recently viewed products')
        cy.linkText().contains('Compare products list').click()
        cy.get('h1').contains('Compare products')
        cy.linkText().contains('New products').click()
        cy.get('h1').contains('New products')
        cy.linkText().contains('My account').click()
        cy.get('h1').contains('Welcome, Please Sign In!')
        cy.linkText().contains('Wishlist').click()
        cy.get('h1').contains('Wishlist')
    });
    
});