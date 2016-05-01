var handle = Meteor.subscribe('chat');

Template.chat.helpers({
    chat: ()=> {
        return Chat.find({}, {
            sort: {createdAt: -1}
        });
    },
    Time: (date) => {
        return moment(date).fromNow();
    }
});

Template.chat.events({
    'submit .chat--form' (event, template) {
        event.preventDefault();

        let   message;

        message   = template.find('#message').value;

        Chat.insert({
            "username"    : Meteor.user().username,
            "message"     : message,
            "createdAt"   : Date.now()
        });

        template.find('#message').value = '';
    }
});
