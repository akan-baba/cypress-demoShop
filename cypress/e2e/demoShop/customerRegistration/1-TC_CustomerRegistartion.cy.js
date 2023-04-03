///<reference types = "cypress" />

import {Page} from '../../../page-objects/demoShop/customerRegistration'
import { faker } from '@faker-js/faker';
const page = new Page();
const email = faker.internet.email();

describe('Customer Registration', () => {

    it('Registration Page', () => {
        
        cy.visit('https://demowebshop.tricentis.com/')
        page.pageActions.registerLink().click()
        page.pageActions.sexMale().click()
        page.pageActions.firstName().type('Joe')
        page.pageActions.lastName().type('James')
        page.pageActions.email().type(email)
        page.pageActions.password().type('red123')
        page.pageActions.confirmPassword().type('red123')
        page.pageActions.registerBtn().click()
        page.pageActions.registrationComplete().should('be.visible','Your registration completed')
            
    });

})

