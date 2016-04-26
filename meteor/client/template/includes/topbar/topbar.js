Template.topbar.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Bert.alert('À bientôt!', 'info', 'growl-top-right');
    }
});
