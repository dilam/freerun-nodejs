var mongoose      = require("mongoose");
var query         = require("url");
var express       = require("express");
var app           = express();

var User;

mongoose.connect("mongodb://admin:6TnOn3xx@ds011251.mlab.com:11251/freerun");

User = mongoose.model('scores', {
    username: String,
    score: Number
});

app.get("/", function (req, res) {
    var newUser,
        uri;

    uri = query.parse(req.url, true).query;

    if (!uri.name || !uri.score) {
        res.end("failed");
    }

    newUser = new User({username: uri.name, score: uri.score});
    newUser.save(function (error) {
        if (error) {
            res.send("failed");
        } else {
            res.send("success");
        }
    });
});

app.listen(3000);