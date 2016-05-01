var mongoose      = require("mongoose");
var query         = require("url");
var bodyParser 	  = require('body-parser');
var express	  = require("express");
var app		  = express();

var User;

mongoose.connect("mongodb://admin:6TnOn3xx@ds011251.mlab.com:11251/freerun");

User = mongoose.model('scores', {
    username: String,
    score: Number
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post("/", function (req, res) {
    var newUser,
        uri;

    uri = {};//query.parse(req.url, true).query;
    uri.name = req.body.name;
    uri.score = req.body.score;

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
