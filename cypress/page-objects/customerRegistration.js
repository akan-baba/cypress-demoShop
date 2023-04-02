export class Page {

    //---------Selectors---------//

    selectors = {
        registerLink :'.ico-register',
        sexMale:'#gender-male',
        sexFemale:'#gender-female',
        firstName:'#FirstName',
        lastName:'#LastName',
        email:'#Email',
        password:'#Password',
        confirmPassword:'#ConfirmPassword',
        registerBtn:'#register-button',
        registrationComplete: '.result'
        
    }

    //---------Page Actions---------//
    
    pageActions = {
        registerLink: () => cy.get(this.selectors.registerLink),
        sexMale: () => cy.get(this.selectors.sexMale),
        sexFemale: () => cy.get(this.selectors.sexFemale),
        firstName: () => cy.get(this.selectors.firstName),
        lastName: () => cy.get(this.selectors.lastName),
        email: () => cy.get(this.selectors.email),
        password: () => cy.get(this.selectors.password),
        confirmPassword: () => cy.get(this.selectors.confirmPassword),
        registerBtn: () => cy.get(this.selectors.registerBtn),
        registrationComplete: () => cy.get(this.selectors.registrationComplete)
    }
}