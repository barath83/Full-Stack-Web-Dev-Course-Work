const mongoose = require('mongoose');

//importing the model schema 
const Product = require('./models/products');

//mongoose uses connection cooling concept
//we need not use open and close methods
//handles the overall connection
//it also returns a promise 
mongoose.connect(
    'mongodb+srv://barath:barath@firstcluster.0iqey.mongodb.net/product?retryWrites=true&w=majority'
    ).then(()=>{
        console.log("Connected to database");
    }).catch(()=>{
        console.log('Connection failed.');
    })


const createProduct = async (req,res,next) => {
    //using the model schema to create a js object
    const createdProduct = new Product({
        name : req.body.name,
        price: req.body.price
    });

    //save provided by mongoose only used with model&schema
    //this is asynchronous task
    //.save adds the value in result to the mongo db to the specified collection from the model
    const result = await createdProduct.save();

    res.json(result);
};

const getProducts = async (req,res,next) => {

    //this is asynchronous task
    //.find returns an array with all objects in the collection
    //.exec his added to return a pure promise  
    const products = await Product.find().exec();
    res.json(products);
}


exports.createProduct = createProduct;
exports.getProducts = getProducts;