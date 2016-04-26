Template.login.helpers({
    'error': () => {
        let     error,
                reason;

        error   = {};
        reason  = Session.get('login__error').reason;

        if (reason === 'Match failed') {
            error.general   = 'Vous n\'avez rempli aucun champ.';
        } else if (reason === 'User not found') {
            error.username  = 'Vous n\'avez pas entrer un pseudo correct.';
        } else if (reason === 'Incorrect password') {
            error.password  = 'Votre mot de passe est incorect';
        }

        return (error);
    }
});

Template.login.events({
    'submit .login--form' (event, template) {
        event.preventDefault();

        let         username,
                    password;

        username    = template.find('#username').value;
        password    = template.find('#password').value;

        Meteor.loginWithPassword(username, password, (error) => {
            if (error) {
                Session.set('login__error', error);
                $('#password').val('');
            } else {
                Router.go('main');
                Bert.alert('Bienvenue ' + Meteor.user().username + ' !', 'success', 'growl-top-right');
            }
        });

        return (false);
    }
});

Template.login.onDestroyed(() => {
    Session.set('login__error', null);
});
