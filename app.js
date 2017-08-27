var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var path = require('path');
var mongoose = require('mongoose');
var port = 5000;



var listings = require('./server/routes/listings');
var rentals = require('./server/routes/rentals');



/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // needed for angular requests

app.use('/listings', listings);
app.use('/rentals', rentals);


/** ---------- MONGOOSE CONNECTION ---------- **/

var databaseUrl = 'mongodb://localhost:27017/realestate';
mongoose.connect(databaseUrl, 
{
    useMongoClient: true
});

mongoose.connection.on('connected', function(){
    console.log('mongoose connected to: ', databaseUrl);
});

/** ---------- START SERVER ---------- **/
;
app.listen(port, function() {
    console.log('Listening on port: ', port);
});