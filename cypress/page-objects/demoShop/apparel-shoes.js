export class Apparel_shoes {
  selectors = {
    shoeSize: '#product_attribute_28_7_10',
    colour: '[class="color"]',
  };

  pageActions = {
    shoeSize: () => cy.get(this.selectors.shoeSize),
    colour: () => cy.get(this.selectors.colour),
  };
}
