const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { randomName, randomEmail, randomUserName } = require('../utils');
import Register from "../pages/trek_register_page";

Given("the trek register page is loaded", () =>{
    Register.accessRegisterPage();
});

When("the user enters correct values to the fields and clicks on create new account", () =>{
    Register.fillNameField(randomName());
    Register.fillLastNameField(randomUserName());
    Register.fillEmailField(randomEmail());
    Register.fillPasswordField('Testador123!');
    Register.fillPasswordConfirmationField('Testador123!');
    Register.checkAgreeBox();
    Register.clickCreateButton();
});

Then("the new user should be registered {string}", (message) => {
    Register.checkAlert().then((element) => {
        expect(element.text()).eq(message)
    })
});

