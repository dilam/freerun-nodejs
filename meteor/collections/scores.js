Scores = new Meteor.Collection('scores');

Scores.allow({
    insert: function() {
        return true;
    }
});
