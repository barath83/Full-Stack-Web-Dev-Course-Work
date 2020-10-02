const express = require('express');
const bodyParser = require('body-parser');

//we call express function with loads of features store in app object
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.post('/user',(req,res,next) => {
    return res.send('<h1> User : '+req.body.username+'</h1>');
})

//middleware funnels every incoming req manipulate req/res 
//use is a middleware
//it takes a function with three parameters
app.get('/',(req,res,next)=> {
    res.send('<form action = "/user" method="POST"><input type="text" name="username"><button>Create User</button></form>')
});

app.listen(5000);