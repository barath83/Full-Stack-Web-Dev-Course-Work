const fs = require('fs');
const path = require('path');

//Create folder
/*fs.mkdir(path.join(__dirname,'/test'),{},(err) => {
    if (err) throw err;
    console.log('Folder created..')
});


//Create and write to a file
//writeFile overwrites what's already in a file
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World',(err) => {
    if (err) throw err;
    console.log('File written..')

    //File append
    fs.appendFile(path.join(__dirname,'/test','hello.txt'),' Nodejs is new to me',(err)=>{
        if (err) throw err;
        console.log('File appended..')
    })
});



//Read File

fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) => {
    if (err) throw err;
    console.log(data);
});
*/


//Rename file

fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'),(err,data) => {
    if (err) throw err;
    console.log('File renamed..');
});