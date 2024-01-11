const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { randomName, randomEmail, randomUserName, cancelCallAPI } = require('../utils');
import Register from "../pages/trek_register_page";

Given("the trek register page is loaded", () =>{
    Register.accessRegisterPage();
    cancelCallAPI();
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

When("the user not fills just field First Name", () =>{
    Register.fillNameField(null);
    Register.fillLastNameField(randomUserName());
    Register.fillEmailField(randomEmail());
    Register.fillPasswordField('Testador123!');
    Register.fillPasswordConfirmationField('Testador123!');
    Register.checkAgreeBox();
    Register.clickCreateButton();
});

When("the user not fills just field Last Name", () =>{
    Register.fillNameField(randomName());
    Register.fillLastNameField(null);
    Register.fillEmailField(randomEmail());
    Register.fillPasswordField('Testador123!');
    Register.fillPasswordConfirmationField('Testador123!');
    Register.checkAgreeBox();
    Register.clickCreateButton();
});

When("the user not fills just field Email", () =>{
    Register.fillNameField(randomName());
    Register.fillLastNameField(randomUserName());
    Register.fillEmailField(null);
    Register.fillPasswordField('Testador123!');
    Register.fillPasswordConfirmationField('Testador123!');
    Register.checkAgreeBox();
    Register.clickCreateButton();
});

When("the user not fills just field Password", () =>{
    Register.fillNameField(randomName());
    Register.fillLastNameField(randomUserName());
    Register.fillEmailField(randomEmail());
    Register.checkAgreeBox();
    Register.clickCreateButton();
});

When("the user fills differents Password", () =>{
    Register.fillNameField(randomName());
    Register.fillLastNameField(randomUserName());
    Register.fillEmailField(randomEmail());
    Register.fillPasswordField('Testador123!');
    Register.fillPasswordConfirmationField('Abc1010');
    Register.checkAgreeBox();
    Register.clickCreateButton();
});

Then("the user will see the message {string}", (message) => {
    Register.checkAlertMessage().then((element) => {
        expect(element.text()).eq(message)
    })
});


