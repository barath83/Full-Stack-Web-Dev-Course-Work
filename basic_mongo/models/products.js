const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name : {type : String,required:true},
    price : {type : Number, required:true}
});

//model will take two arguments
//first is scheme name 'Product' the collection name will be products with a plural at the end 
//if it's given as Commodity then the collection name will be commodities
//the second argument is the schema itself passed
module.exports = mongoose.model('Product',productSchema);

