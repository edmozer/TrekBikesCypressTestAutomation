/// <reference types="cypress" />
let el = require('../elements/trekRegisterElements').TrekRegisterElements
const { set, click, scrollTo, get_text} = require('../actions.js')


class Register {

  accessRegisterPage() {
    cy.visit(el.urlTrekRegister);
  }

  fillNameField(name){
    click(el.btnCloser);
    name && set(el.firstNameField, name);
  }

  fillLastNameField(lastName){
    lastName && set(el.lastNameField, lastName);
  }
  
  fillEmailField(email){
    email && set(el.emailField, email);
  }

  fillPasswordField(password){
    set(el.passwordField, password);
  }

  fillPasswordConfirmationField(){
    set(el.confirmPasswordField, "Testador123!");
  }

  checkAgreeBox(){
    scrollTo(el.confirmPasswordField);
    click(el.agreeBox);
  }

  clickCreateButton(){
    click(el.createButton);
  }

  checkAlert(){
    return get_text(el.registerUserAlert);
  }

}

export default new Register();
