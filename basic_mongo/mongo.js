const MongoClient = require('mongodb').MongoClient;

//our url in db server for connection 
const url = 'mongodb+srv://barath:barath@cluster0.zz590.mongodb.net/products_test?retryWrites=true&w=majority'; 

const createProduct = async (req,res,next) => {

    const newProduct = {
        name:req.body.name,
        price : req.body.price
    };
    //does not establish connection but we can get the access point of the server db where need to connect
    const client = new MongoClient(url);

    try{
        //connects to our cluster in mongodb
        await client.connect();
        //we can access specific database in our server
        const db = client.db();
        //we have to provide a collection where to add in database
        const result = db.collection('products').insertOne(newProduct);

    }catch(error){
        return res.json({message:'Could not store data.'})
    };

    //closing the connection
    client.close();
    res.json(newProduct);
};


const getProducts = async (req,res,next) => {
    const client = new MongoClient(url);

    let products;
    try{
        //open connection
        await client.connect();
        //connect to db
        const db = client.db();
        //use await since the connection is asynchronus
        //get all products in the collection in a array
        products = await db.collection('products').find().toArray();

    }catch(error){
        return res.json({message:'Could not retrieve products'});
    };
    client.close();

    res.json(products);
};


exports.createProduct = createProduct;
exports.getProducts = getProducts;