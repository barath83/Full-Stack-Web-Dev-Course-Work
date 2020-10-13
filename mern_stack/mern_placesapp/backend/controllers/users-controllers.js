
const {validationResult} = require('express-validator');
const HttpError = require('../models/http-error');
const User = require('../models/user');


const getUsers  = async (req,res,next) => {
   
    let users;
    //except password other details will be retrieved
    try{
        users = await User.find({}, '-password');
    }catch(err){
        const error = new HttpError('Fetching users failed,try again later',500);
        return next(error);
    }
     
    res.json({users:users.map( user => user.toObject({getters:true}))})
};



const signup = async (req,res,next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(new HttpError('Invalid inputs given,please check',422));
    }

    const {name,email,password}  = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email : email});
    }catch(err){
        const error = new HttpError('Signing up failed.Try later',500);
        return next(error);
    }
    
    if(existingUser){
        const error = new HttpError('User exists already,login.',422);
        return next(error);
    }
    
    const createdUser = new User({
        name,
        email,
        image: 'https://www.flaticon.com/svg/static/icons/svg/21/21104.svg',
        password,
        places: []
    })

    try{
        await createdUser.save();
      }catch(err){
        const error = new HttpError('Signing up failed,try again',500);
        return next(error);
      }

    //getters removes the underscore infront of id in mongodb objects
    res.status(201).json({user:createdUser.toObject({getters:true})});
};

const login = async (req,res,next) => {
    const {email,password} = req.body;

    let existingUser;


    try{
        existingUser = await User.findOne({email : email});
    }catch(err){
        const error = new HttpError('Login failed.Try later',500);
        return next(error);
    }

    if(!existingUser || existingUser.password !== password){
        const error = new HttpError('Invalid credentials',401);
        return next(error);
    }
   
    res.json({message:'Logged in.'});     
        
};



exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;

