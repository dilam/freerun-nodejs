Meteor.subscribe('scores');

Template.highscore.helpers({
    scores: ()=> {
        return Scores.find({}, {
            sort: {score: -1}
        });
    }
});
