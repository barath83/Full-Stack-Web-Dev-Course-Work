const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const login = require('./routes/login');
const studentForm = require('./routes/studentForm');

const app = express();

app.use(bodyParser.json());

app.use(cors())

app.use('/api/login',login);
app.use('/api/profile',studentForm);




app.listen(5000,()=>{
    console.log("Server started");
});