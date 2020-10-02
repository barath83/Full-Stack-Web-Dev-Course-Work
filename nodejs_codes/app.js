 
// importing file system module offered by nodeJs 
const fs = require('fs');

const user = "barath";

//takes three arguments
//1.file name to be created, 2.data to be written, 3.callback function to handle errors
fs.writeFile('user_data.txt','Name:'+user,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("WRITE Done");
});

//this works
//console.log(user);

// doesn't work since it can be accessed only in browser
//alert(user);
