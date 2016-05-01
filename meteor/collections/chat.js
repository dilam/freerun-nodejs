Chat = new Meteor.Collection('chat');

Chat.allow({
    insert: function() {
        return true;
    }
});
