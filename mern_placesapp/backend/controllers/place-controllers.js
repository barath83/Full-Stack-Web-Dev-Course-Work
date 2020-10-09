const { v4: uuidV4 } = require('uuid');
const {validationResult} = require('express-validator');
const HttpError = require('../models/http-error');
const Place = require('../models/place');
const getCoordsForAddress = require('../util/location');
const User =  require('../models/user');
const mongoose = require('mongoose');

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
 
 
 const getPlaceById = async (req,res,next)=> {

    const placeId = req.params.pid;    //{pid:'p1'}

    let place;
    try{
       place = await Place.findById(placeId);
    }catch(err){
      const error = new HttpError('Something went wrong,could not find place',500);
      return next(error);
    }

    if(!place){
        const error = new HttpError('Could not find a place for this id.',404);
        return next(error);
    }

    //mongoose object is converted into js object
    //gets rid of the _id to id
    res.json({place : place.toObject({getters:true})});   //=>{place} => {place=place}
};


const getPlacesByUserId = async (req,res,next) => {
    const userId = req.params.uid;

    let places;
    try{
      places = await Place.find({creator:userId});
    }catch(err){
      const error = new HttpError('Fetchinf failed',500);
      return next(error);
    }
    
    if(!places || places.length === 0){
        return next(new HttpError('Could not find a place for this user id.',404));
    }

    res.json({places : places.map(place => place.toObject({getters:true}))});
}


const createPlace = async (req,res,next) => {
  
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        throw new HttpError('Invalid inputs given,please check',422);
    }

    //object destructuring
    //instead of const title = req.body.title and so on 
    const { title,description,address,creator} = req.body;

    let coordinates;
    try {
      coordinates = await getCoordsForAddress(address);
    } catch (error) {
      return next(error);
    }


    const createdPlace = new Place({
      title,
      description,
      address,
      location:coordinates,
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/400px-Empire_State_Building_%28aerial_view%29.jpg',
      creator
    });

    let user;
    try{
      user = await User.findById(creator);
    }catch(err){
      const error = new HttpError('Creating place failed,try again',500);
      return next(error);
    }

    if(!user) {
      const error = new HttpError('Cannot find user',404);
      return next(error);
    }

    try{

      //transactions run on sessions to carry out the activities of both creating a place 
      //and adding it to the specifies users list
      //start a session async task
      const sess = await mongoose.startSession();
      //start transactions with that session
      sess.startTransaction();
      //create a place and save it should pass session as argument
      await createdPlace.save({session : sess});
      //should push the createdplace inside the user who is saving
      user.places.push(createdPlace); 
      //should save the user's updated list
      await user.save({session : sess})
      //session commits the transaction
      await sess.commitTransaction();

    }catch(err){
      const error = new HttpError('Creating place failed,try again',500);
      return next(error);
    }

    res.status(201).json({place:createPlace});
};


const updatePlace = async (req,res,next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(new HttpError('Invalid inputs given,please check',422));
    }

    // we need data for updation 
    const { title,description} = req.body;
    const placeId = req.params.pid;
    
    let place;
    try{
      place = await Place.findById(placeId);
    }catch(err){
      const error = new HttpError('Something went wrong could not update place',500);
      return next(error);
    }

    place.title = title;
    place.description = description;

    try{
      await place.save();
    }catch(err){
      const error = ('Something went wrong could not update place',500);
      return next(error);
    }


    res.status(200).json({place: place.toObject({getters : true})});
};

const deletePlace = async (req,res,next) => {

    // get the id of the place to be deleted 
    const placeId = req.params.pid;

    let place;
    try{
      place = await Place.findById(placeId).populate('creator');
    }catch(err){
      const error = new HttpError('Something went wrong could not delete place',500);
      return next(error);
    }

    if(!place) {
      const error = new HttpError('Could not find place for this id',404);
    }

    try{
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await place.remove({session:sess});
      place.creator.places.pull(place);
      await place.creator.save({session:sess});
      await sess.commitTransaction();

    }catch(err){
      const error = new HttpError('Something went wrong could not delete place',500);
      return next(error);
    }
    
    res.status(200).json({message: 'Deleted place.'});
}; 

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace; 
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;