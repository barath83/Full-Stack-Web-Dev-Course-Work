const express = require('express');
const {check} = require('express-validator');

const placesControllers  = require('../controllers/place-controllers');

//gives a special object on which we can use middleware
const router = express.Router();


router.get('/:pid',placesControllers.getPlaceById);

router.get('/user/:uid',placesControllers.getPlacesByUserId);


router.post('/',
            [
            check('title')
             .not()
             .isEmpty(),
            check('description').isLength({min:5}),
            check('address').not().isEmpty(),
            ],
            placesControllers.createPlace);

router.patch('/:pid',
                [
                    check('title')
                    .not()
                    .isEmpty(),
                    check('description').isLength({min:5}),
                ]
                ,placesControllers.updatePlace);


router.delete('/:pid',placesControllers.deletePlace);


//syntax for export in express
module.exports = router;