var express = require('express');
var router = express.Router();
var listings = require('../models/listings.schema.js');

router.get('/', function (req, res) {
    //find all of the people in the collection
    listings.find({}, function (err, data) {
        if (err) {
            console.log('find error:', err);
            res.sendStatus(500);
        } else {
            console.log('found data:', data)
            res.send(data);// data always going to be an array of objects
        }
    });
});

router.post('/', function(req, res){ 
    console.log('new listing: ', req.body); 
    var addListing = new listings(req.body);
    addListing.save(function(err, data){
        console.log('saved to listings', data);
        if(err) {
            console.log('save error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201)
        }
    })
});

module.exports = router;