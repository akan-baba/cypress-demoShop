export class Computers {
  //----------Selectors----------

  selectors = {
    addToCart_1: '[value="Add to cart"]',
    radioButtons: '[type="radio"]',
    checkBox: '[type="checkbox"]',
    quantityFiled: '[data-val-number="The field Qty must be a number."]',
    addToCart_2: '#add-to-cart-button-72',
    shopingCart:'.ico-cart > .cart-label',
    country:'#CountryId',
    termsOfservice: '#termsofservice',
    checkOut: '#checkout',
    billingBtn:"input[onclick='Billing.save()']",
    shippingBtn: "input[onclick='Shipping.save()']",
    shippingMethodBtn: "input[class='button-1 shipping-method-next-step-button']",
    paymentMethodBtn: "input[class='button-1 payment-method-next-step-button']",
    paymentInfoBtn: "input[class='button-1 payment-info-next-step-button']",
    confirmButton: "input[value='Confirm']",
    orderSucessfull: '.title',
    continueButton: ".button-2",
    logOut:'.ico-logout'
    
  };

  //----------Page Actions----------

  pageActions = {
    addToCart_1: () => cy.get(this.selectors.addToCart_1),
    radioButtons: () => cy.get(this.selectors.radioButtons),
    quantityFiled: () => cy.get(this.selectors.quantityFiled),
    checkBox: () => cy.get(this.selectors.checkBox),
    addToCart_2: () => cy.get(this.selectors.addToCart_2),
    shopingCart: () => cy.get(this.selectors.shopingCart),
    country: () => cy.get(this.selectors.country),
    termsOfservice: () => cy.get(this.selectors.termsOfservice),
    checkOut: () => cy.get(this.selectors.checkOut),
    billingBtn: () => cy.get(this.selectors.billingBtn),
    shippingBtn: () => cy.get(this.selectors.shippingBtn),
    shippingMethodBtn: () => cy.get(this.selectors.shippingMethodBtn),
    paymentMethodBtn: () => cy.get(this.selectors.paymentMethodBtn),
    paymentInfoBtn: () => cy.get(this.selectors.paymentInfoBtn),
    confirmButton: () => cy.get(this.selectors.confirmButton),
    orderSucessfull: () => cy.get(this.selectors.orderSucessfull),
    continueButton: () => cy.get(this.selectors.continueButton),
    logOut: () => cy.get(this.selectors.logOut)
    
  };
}
