Accounts.onCreateUser((options, user) => {
    let     regex;

    regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (regex.test(options.mail)) {
        user.email = options.mail;
    }
    if (options.password === options.passwordConfirm) {
        user.password = options.password;
    }
    if (options.username) {
        user.username = options.username;
    }

    user.rank = 1;

    return user;
});
