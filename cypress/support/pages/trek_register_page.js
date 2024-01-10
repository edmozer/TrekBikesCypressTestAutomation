/// <reference types="cypress" />
const { set, click, get_text } = require('../actions.js');
let el = require('../elements/trekRegisterElements').TrekRegisterElements


class Register {

  accessRegisterPage() {
    cy.visit(el.urlTrekRegister);

}

  fillNameField(name){
    name && set(el.firstNameField, name);
  }

  fillLastNameField(){
    cy.get(el.lastNameField).type("Testador");
  }
  
  fillEmailField(email){
    email && set(el.emailField, email);
  }
  fillPasswordField(){
        cy.get(el.passwordField).type("Testador123!");
  }
  fillPasswordConfirmationField(){
    cy.get(el.confirmPasswordField).type("Testador123!");
  }
  checkAgreeBox(){
    cy.get(el.agreeBox).click();
  }
  clickCreateButton(){
    cy.get(el.createButton).click();
  }
  checkAlert(){
    cy.contains(el.registerUserAlert, 'Thank you for registering');
  }

}

export default new Register();
