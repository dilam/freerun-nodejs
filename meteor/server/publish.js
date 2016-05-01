Meteor.publish('scores', function () {
    return Scores.find();
});

Meteor.publish('chat', function (limit) {
    return Chat.find({}, {limit: limit});
});
