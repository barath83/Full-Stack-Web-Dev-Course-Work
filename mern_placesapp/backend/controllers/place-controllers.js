const HttpError = require('../models/http-error');


const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Marina',
        description:'2ND Longest Beach in World',
        location : {
            lat: 60.78934,
            lng: 42.34597,
        },
        address: 'Lighthouse Road Chennai',
        creator:'u1',
    }
]
 
 
 const getPlaceById = (req,res,next)=> {
    const placeId = req.params.pid;    //{pid:'p1'}

    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });

    if(!place){
        return next(new HttpError('Could not find a place for this id.',404));
    }

    res.json({place});   //=>{place} => {place=place}
};


const getPlaceByUserId = (req,res,next) => {
    const userId = req.params.uid;

    const place = DUMMY_PLACES.find(p =>{ 
        return p.creator === userId;
    });

    if(!place){
        return next(new HttpError('Could not find a place for this user id.',404));
    }
    res.json({place});
}


exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;