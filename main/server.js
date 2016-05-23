var express = require('express');
var app = express();
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var favicon = require('serve-favicon');
var config = require('./config');


// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/application'));

// log every request to the console
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); 

// parse application/json
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); 
app.use(methodOverride());

//Set the favicon
//app.use(favicon(__dirname + '/favicon.ico'));



//Load the homepage
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/application/index.html');
});


app.listen(8080);
console.log("App listening on port 8080");