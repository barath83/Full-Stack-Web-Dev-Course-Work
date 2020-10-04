const express = require('express');
const bodyParser = require('body-parser');

//our own imports for routes
const placesRoutes = require('./routes/places-routes');

const app = express();

app.use('/api/places',placesRoutes); // => api/places/...

//error middleware function
//express recognizes this as a special middleware as it has four arguments
app.use((error,req,res,next) => {
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occurred.'});
});


app.listen(5000);