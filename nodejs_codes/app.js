const http = require('http');

//http.createServer returns a server object
//takes one function with two arguments req,res provided by nodejs
const server = http.createServer((req,res)=> {
    console.log('INCOMING REQUEST');
    console.log(req.method,req.url);

    if(req.method == 'POST'){
        
        let body = '';

        req.on('end',() => { 

            const userName = body.split('=')[1];
            res.end('<h1>'+ userName +'</h1>');
        });

        //req for a data event as we get a chunk of data in stream
        req.on('data',(chunk) => {
            body+=chunk;
        });
    }
    else{
        res.setHeader('Content-Type','text/html');
        res.end('<form method="POST"><input type="text" name="username"><button>Create User</button></form>');
    }
    //makes the response sent as plain text not as html
    //res.setHeader('Content-Type','text/plain');

    //makes the response sent as html
    
});


//listens incoming requests
//handles multiple req
server.listen(5000); 