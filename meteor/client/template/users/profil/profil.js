Template.profil.onCreated(function () {
    this.subscribe('getUser', Router.current().params.user);
});

Template.profil.helpers({
    'user' () {
        let     user,
                param;

        param = Router.current().params.user;
        user = Meteor.users.find({'username': param});
        user = user.fetch();
        user = user[0];
        user.date = moment(user.createdAt).subtract(3, 'days').calendar();

        return (user);
    }
});
