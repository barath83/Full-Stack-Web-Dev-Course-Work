const path = require('path');

//Base file name

//gives the full directory path along with file name
console.log(__filename);

//gives only the current file name
console.log(path.basename(__filename));

//gives only the directory name not hte file
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Create path object
//It gives us a object with properties which we can access
console.log(path.parse(__filename));

//Concatenate paths
console.log(path.join(__dirname,'test','hello.html'))