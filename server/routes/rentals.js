var express = require('express');
var router = express.Router();
var Rentals = require('../models/rentals.schema.js');

router.get('/', function (req, res) {
    //find all of the people in the collection
    Rentals.find({}, function (err, data) {
        if (err) {
            console.log('find error:', err);
            res.sendStatus(500);
        } else {
            console.log('found data:', data)
            res.send(data);// data always going to be an array of objects
        }
    });
});

module.exports = router;