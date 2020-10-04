const express = require('express');

const usersControllers  = require('../controllers/users-controllers');

//gives a special object on which we can use middleware
const router = express.Router();




router.get('/',usersControllers.getUsers);


router.post('/signup',usersControllers.signup);

router.post('/login',usersControllers.login);




//syntax for export in express
module.exports = router;