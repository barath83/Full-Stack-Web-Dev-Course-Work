const { v4: uuidV4 } = require('uuid');
const HttpError = require('../models/http-error');


let DUMMY_PLACES = [
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


const getPlacesByUserId = (req,res,next) => {
    const userId = req.params.uid;

    const places = DUMMY_PLACES.filter(p =>{ 
        return p.creator === userId;
    });

    if(!places || places.length === 0){
        return next(new HttpError('Could not find a place for this user id.',404));
    }
    res.json({places});
}


const createPlace = (req,res,next) => {
    //object destructuring
    //instead of const title = req.body.title and so on 
    const { title,description,coordinates,address,creator} = req.body;

    const createdPlace = {
        //since title is the same name for property it need not be title : title
        id : uuidV4(),
        title,
        description,
        location: coordinates,
        address,
        creator,
    };

    DUMMY_PLACES.push(createdPlace);

    res.status(201).json({place:createPlace});
};


const updatePlace = (req,res,next) => {
    // we need data for updation 
    const { title,description} = req.body;
    const placeId = req.params.pid;
    
    const updatedPlace = { ...DUMMY_PLACES.find(p => p.id === placeId)};
    const placeIndex = DUMMY_PLACES.findIndex(p=> p.id === placeId);

    updatedPlace.title = title;
    updatedPlace.description = description;

    DUMMY_PLACES[placeIndex] = updatedPlace;

    res.status(200).json({place:updatedPlace});
};

const deletePlace = (req,res,next) => {
    
    // get the id of the place to be deleted 
    const placeId = req.params.pid;
    //return true to all the places other than the place to be deleted in the filter 
    DUMMY_PLACES = DUMMY_PLACES.filter(p=> p.id!==placeId);
    res.status(200).json({message: 'Deleted place.'});
}; 

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace; 
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;