export class Electronics {
  selectors = {
    manufactureDropdown: "#product_attribute_80_2_37",
    colour: "#product_attribute_80_1_38",
  };

  pageActions = {
    manufactureDropdown: () => cy.get(this.selectors.manufactureDropdown),
    colour: () => cy.get(this.selectors.colour),
  };
}
