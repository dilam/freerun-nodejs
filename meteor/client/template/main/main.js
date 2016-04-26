Meteor.subscribe('mainComponent');

Template.main.helpers({
    adminRight: function() {
        return Meteor.user().rank > 0;
  }
})
