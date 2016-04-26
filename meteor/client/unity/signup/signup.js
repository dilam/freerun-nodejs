Template.unitySignup.onCreated(function () {
    let     username,
            mail,
            password,
            passwordConfirm,
            options;

    username            = Router.current().params.username;
    mail                = Router.current().params.mail;
    password            = Router.current().params.password;
    passwordConfirm     = Router.current().params.passwordConfirm;

    Accounts.createUser({
        username:           username,
        mail:               mail,
        password:           password,
        passwordConfirm:    passwordConfirm,
    });

    return (false);
});
