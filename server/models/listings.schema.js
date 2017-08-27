var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema
var listingsSchema = new Schema({
    cost: {type: Number},
    sqft: {type: Number}, 
    city: {type: String},
});

//exports our model
//require in the listings.route
module.exports = mongoose.model('listings', listingsSchema);

