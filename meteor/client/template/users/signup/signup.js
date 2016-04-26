Template.signup.helpers({
    'error' () {
        let     error,
                reason;

        error   = {};
        reason  = Session.get('signup__error').reason;

        // errors

        return (error)
    }
});

Template.signup.events({
    'submit .signup--form' (event, template) {
        event.preventDefault();

        let     username,
                mail,
                password,
                passwordConfirm,
                options;

        username            = template.find('#username').value;
        mail                = template.find('#mail').value;
        password            = template.find('#password').value;
        passwordConfirm     = template.find('#password__confirm').value;

        Accounts.createUser({
            username:           username,
            mail:               mail,
            password:           password,
            passwordConfirm:    passwordConfirm,
        }, (error) => {
            if (error) {
                Session.set('signup__error', errors);
            } else {
                Router.go('main');
                Bert.alert('Bienvenue ' + Meteor.user().username + '!', 'success', 'growl-top-right');
            }
        });

        return (false);
    }
});

Template.login.onDestroyed(() => {
    Session.set('signup__error', null);
});
