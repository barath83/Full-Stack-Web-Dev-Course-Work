const express = require('express');

const placesControllers  = require('../controllers/place-controllers');

//gives a special object on which we can use middleware
const router = express.Router();




router.get('/:pid',placesControllers.getPlaceById);

router.get('/user/:uid',placesControllers.getPlaceByUserId);


//syntax for export in express
module.exports = router;