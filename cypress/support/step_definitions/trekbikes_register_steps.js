const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { randomName, randomEmail, randomPassword } = require('../utils');
import Register from "..//pages/trek_register_page";

Given("the trek register page is loaded", () =>{
    Register.accessRegisterPage();
});

When("the user enters correct values to the fields and clicks on create new account", () =>{

Register.fillNameField(randomName());
Register.fillLastNameField();
Register.fillEmailField(randomEmail());
Register.fillPasswordField();
Register.fillPasswordConfirmationField();
Register.checkAgreeBox();
Register.clickCreateButton();
});

Then("the new user should be registered", () => {
    Register.checkAlert();
  });

