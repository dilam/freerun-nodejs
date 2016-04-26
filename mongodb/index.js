var mongoose      = require("mongoose");
var http          = require("http");
var query         = require("url");

var server,
    User;

mongoose.connect("mongodb://admin:6TnOn3xx@ds011251.mlab.com:11251/freerun");


User = mongoose.model('scores', {
    username: String,
    score: Number
});

server = http.createServer(function (req, res) {
    var newUser,
        uri;

    uri = query.parse(req.url, true).query;

    if (!uri.name || !uri.score) {
        res.end();
    }

    newUser = new User({username: uri.name, score: uri.score});
    newUser.save(function (error) {
    });
    res.end("success");
});

server.listen(80);
