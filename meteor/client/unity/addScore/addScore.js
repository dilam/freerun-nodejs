Template.addScore.onCreated(function () {
    username = Router.current().params.username;
    score    = parseInt(Router.current().params.score);

    Scores.insert({
        "username" : username,
        "score"    : score
    });
});
