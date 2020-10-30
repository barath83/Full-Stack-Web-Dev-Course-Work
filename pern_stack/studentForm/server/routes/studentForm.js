const express = require('express')
const {body,validationResult} = require('express-validator')
const db = require('../db');

const router = express.Router();

router.post('/',[
    body('name').not().isEmpty(), body('regnumber').not().isEmpty(),body('email').not().isEmpty(),body('fk_dept').not().isEmpty(),
    body('cgpa').not().isEmpty(), body('twelve_mark').not().isEmpty(),body('twelve_board').not().isEmpty(),
    body('ten_mark').not().isEmpty(), body('ten_board').not().isEmpty()              
    ],async(req,res)=>{
        try{
            const name = req.body.name;
            const email = req.body.email;
            const regnumber = req.body.regnumber;
            const fk_dept = req.body.fk_dept;
            const cgpa = req.body.cgpa;
            const twelve_mark = req.body.twelve_mark;
            const twelve_board = req.body.twelve_board;
            const ten_mark = req.body.ten_mark;
            const ten_board = req.body.ten_board;
            const result = await db.query('INSERT INTO students (regnumber,name,email,fk_dept,cgpa,twelve_mark,twelve_board,ten_mark,ten_board) values($1,$2,$3,$4,$5,$6,$7,$8,$9)',[regnumber,name,email,fk_dept,cgpa,twelve_mark,twelve_board,ten_mark,ten_board]);
            console.log(result);
            res.send(result);
        }
        catch(err){
            console.log(err);
            res.send(err);
        }
       
    })


module.exports = router;