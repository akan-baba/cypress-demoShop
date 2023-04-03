///<reference types = "cypress" />
import {Computers} from '../../../page-objects/demoShop/computers'
import {Apparel_shoes} from '../../../page-objects/demoShop/apparel-shoes'
const computers = new Computers()
const apparel_shoes = new Apparel_shoes()


describe('', () => {

    it('', () => {
        cy.visit('/');
        cy.login()
        cy.linkText().contains('Apparel & Shoes').click()
        computers.pageActions.addToCart_1().eq(1).click()
        apparel_shoes.pageActions.shoeSize().select('27')
        apparel_shoes.pageActions.colour().eq(1).click()
        computers.pageActions.quantityFiled().clear()
        computers.pageActions.quantityFiled().type('10')
        cy.get('#add-to-cart-button-28').click()
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
    
});