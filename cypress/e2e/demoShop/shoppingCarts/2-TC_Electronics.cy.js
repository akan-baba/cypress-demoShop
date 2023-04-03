///<reference types = "cypress" />
import {Computers} from '../../../page-objects/demoShop/computers'
import { Electronics } from '../../../page-objects/demoShop/electonics'
const computers = new Computers()
const electronics = new Electronics()

describe('Electronics Cart', () => {

    it('Phone Cover', () => {
        cy.visit('/');
        cy.login()
        cy.linkText().contains('Electronic').trigger('mouseover')
        cy.linkText().contains('Cell phones').click()
        computers.pageActions.addToCart_1().eq(1).click()
        electronics.pageActions.manufactureDropdown().select('113')
        electronics.pageActions.colour().select('116')
        cy.get('#add-to-cart-button-80').click()
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