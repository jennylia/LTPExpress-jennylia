var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    // res.send({
    //   "Output": "Hello World!"
    // });
    res.sendFile(path.join(__dirname + '/public/index.html'));

});

app.post('/', function (req, res) {
    res.send({
        "Output": "Hello World!"
    });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
