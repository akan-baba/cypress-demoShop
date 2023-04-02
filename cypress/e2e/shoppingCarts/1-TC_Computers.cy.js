///<reference types ="cypress" />
import {Computers} from '../../page-objects/computers'
const computers = new Computers()

describe('Computers page', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.login()
    })

    it('Build your own cheap computer', () => {
        cy.linkText().contains('Computers').trigger('mouseover')
        cy.linkText().contains('Desktops').click()
        computers.pageActions.addToCart_1().eq(0).click()
        computers.pageActions.radioButtons().eq(0).click() 
        computers.pageActions.radioButtons().eq(7).click()
        computers.pageActions.checkBox().eq(0).click()
        computers.pageActions.quantityFiled().clear()
        computers.pageActions.quantityFiled().type('10')
        computers.pageActions.addToCart_2().click()
        computers.pageActions.shopingCart().click()
        computers.pageActions.country().select('80')
        computers.pageActions.termsOfservice().click()
        computers.pageActions.checkOut().click()
        cy.address()
        computers.pageActions.billingBtn().click()
        computers.pageActions.shippingBtn().click()
        computers.pageActions.shippingMethodBtn().click()
        computers.pageActions.paymentMethodBtn().click()
        computers.pageActions.paymentInfoBtn().click()
        computers.pageActions.confirmButton().click()
        computers.pageActions.orderSucessfull().should('be.visible','Your order has been successfully processed!')
        computers.pageActions.continueButton().click()
        computers.pageActions.logOut().click()
        
        
    });
    
    it('Build your own expensive computer', () => {
        cy.linkText().contains('Computers').trigger('mouseover')
        cy.linkText().contains('Desktops').click()
        computers.pageActions.addToCart_1().eq(2).click()
        computers.pageActions.checkBox().eq(0).click()
        computers.pageActions.quantityFiled().clear()
        computers.pageActions.quantityFiled().type('10')
        computers.pageActions.checkBox().eq(0).click()
        computers.pageActions.quantityFiled().clear()
        computers.pageActions.quantityFiled().type('10')
        cy.get('#add-to-cart-button-74').click()
        computers.pageActions.shopingCart().click()
        computers.pageActions.country().select('80')
        computers.pageActions.termsOfservice().click()
        computers.pageActions.checkOut().click()
        cy.address()
        cy.continueBtn()
        computers.pageActions.confirmButton().click()
        computers.pageActions.orderSucessfull().should('be.visible','Your order has been successfully processed!')
        computers.pageActions.continueButton().click()
        computers.pageActions.logOut().click()
    });

    it('Notebooks', () => {
        cy.linkText().contains('Computers').trigger('mouseover')
        cy.linkText().contains('Notebooks').click()
        computers.pageActions.addToCart_1().click()
        computers.pageActions.shopingCart().click()
        computers.pageActions.country().select('80')
        computers.pageActions.termsOfservice().click()
        computers.pageActions.checkOut().click()
        cy.address()
        cy.continueBtn()
        computers.pageActions.confirmButton().click()
        computers.pageActions.orderSucessfull().should('be.visible','Your order has been successfully processed!')
        computers.pageActions.continueButton().click()
        computers.pageActions.logOut().click()
    });

})
