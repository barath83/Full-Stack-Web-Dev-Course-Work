const express = require('express')
const {body,validationResult} = require('express-validator')
const db = require('../db');

const router = express.Router();


router.post('/',[
    body('id').not().isEmpty().isLength({min:9}),
    body('password').not().isEmpty().isLength({min:6})],async(req,res)=>{
        try {
            const errors = validationResult(req);
            if(errors.isEmpty()){
                const User = await db.query('SELECT * from credentials WHERE id=$1',[req.body.id]);
                const Id = User.rows[0].id
                const password = User.rows[0].password;
                if(password===req.body.password){
                    res.send("Login Successful")
                }else{
                    res.send("Please Enter Proper Credentials")
                }
            }else{
                res.send({error:'Bad request,please check credentials'})
            }
        } catch (error) {
            console.log(error)
        }
    }
)

module.exports = router