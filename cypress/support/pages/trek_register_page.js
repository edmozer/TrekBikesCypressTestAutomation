/// <reference types="cypress" />
let el = require('../elements/trekRegisterElements').TrekRegisterElements
const { set, click, scrollTo, get_text} = require('../actions.js')


class Register {

  accessRegisterPage() {
    cy.visit(el.urlTrekRegister);
    click(el.btnCloser);
    scrollTo(el.createButton);
  }

  fillNameField(name){
    
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

  fillPasswordConfirmationField(confirmationPassword){
    set(el.confirmPasswordField, confirmationPassword);
  }

  checkAgreeBox(){
    click(el.agreeBox);
  }

  clickCreateButton(){
    click(el.createButton);
  }

  checkAlert(){
    return get_text(el.registerUserAlert);
  }

  checkAlertMessage(){
    return  get_text(el.messageError);
  }

}

export default new Register();
