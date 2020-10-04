const express = require('express');
const bodyParser = require('body-parser');

//our own imports for routes
const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

//body should be parsed before routes for the post request as they need information from body
app.use(bodyParser.json());

app.use('/api/places',placesRoutes); // => api/places/...
app.use('/api/users',usersRoutes);


app.use((req,res,next) => {
    const error = new HttpError('Could not find this route!');
    throw error;
});
 
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