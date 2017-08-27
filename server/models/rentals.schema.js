var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema
var rentalsSchema = new Schema({
    rent: {type: Number},
    sqft: {type: Number}, 
    city: {type: String},
});

//exports our model
//require in the person.route
module.exports = mongoose.model('Rentals', rentalsSchema);