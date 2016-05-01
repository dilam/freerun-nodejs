Template.layout.events({
    'click .displayChatButton': function() {
        if (Session.get('chat') == 'display') {
            Session.set('chat', 'hide');
            $('.displayChat').css('right', '-600px');
            $('.displayChatButton').css('right', '0');
        } else {
            Session.set('chat', 'display');
            $('.displayChat').css('right', '0');
            $('.displayChatButton').css('right', '600px');
        }
    }
});
