Cypress.Commands.add("linkText", () => {
  cy.get("a[href*='/']");
});

Cypress.Commands.add("login", () => {
  cy.get(".ico-login").click();
  cy.get("#Email").type("akan_eskor@live.com");
  cy.get("#Password").type("red123");
  cy.get("input[value='Log in']").click();
});

Cypress.Commands.add("address", () => {
  cy.get("#billing-address-select").select("New Address");
  cy.get("#BillingNewAddress_CountryId").select("80");
  cy.get("#BillingNewAddress_City").type("Manchy");
  cy.get("#BillingNewAddress_Address1").type("Moss Grange");
  cy.get("#BillingNewAddress_ZipPostalCode").type("M17 7RJ");
  cy.get("#BillingNewAddress_PhoneNumber").type("01612251085");
});

Cypress.Commands.add("continueBtn", () => {
   cy.get('#billing-buttons-container > .button-1').click();
   cy.get('#shipping-buttons-container > .button-1').click();
   cy.get('#shipping-method-buttons-container > .button-1').click();
   cy.get('#payment-method-buttons-container > .button-1').click();
   cy.get('#payment-info-buttons-container > .button-1').click();
});
