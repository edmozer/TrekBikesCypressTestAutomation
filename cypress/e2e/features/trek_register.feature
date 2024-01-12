Feature: Register

    @loginSucces
    Scenario: 01 - Success register
        Given the trek register page is loaded
        When the user enters correct values to the fields and clicks on create new account
        Then the new user should be registered "Thank you for registering. Please check your email to finish setting up your account."

    @emptyFirstName
    Scenario: 02 - Empty First Name Field
        Given the trek register page is loaded
        When the user not fills just field First Name
        Then the user will see the message "The First name field is required"
    
    @emptyLastName
    Scenario: 03 - Empty Last Name Field
        Given the trek register page is loaded
        When the user not fills just field Last Name
        Then the user will see the message "The Last name field is required"

    @emptyEmail
    Scenario: 04 - Empty Email Field
        Given the trek register page is loaded
        When the user not fills just field Email
        Then the user will see the message "The Email address field is required"
    
    @emptyPassword
    Scenario: 05 - Empty Password Field
        Given the trek register page is loaded
        When the user not fills just field Password
        Then the user will see the message "The Password field is required"

    @passwordNotSame
    Scenario: 06 - Passwords are not the same
        Given the trek register page is loaded
        When the user fills differents Password
        Then the user will see the message "The Confirm password confirmation does not match"