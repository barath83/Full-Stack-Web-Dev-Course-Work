const {Client} = require('pg');
const client = new Client({
    user : "postgres",
    password : "barathpriya83",
    host: "localhost",
    port : 5432,
    database : "postgres",
});

//the function should always be called for the code to be executed unlike the then calls 
execute()

async function execute(){
   
    //try catch block usage is essential for async await 
   try{
        await client.connect()
        console.log("Connected successfully");

        //this will throw an error and then catch block will be catching and printing it out
        //await client.query("insert into employees values(1,2,3)"); 

        const results = await client.query("select * from employees"); 
        console.table(results.rows)
   }
   catch(ex)
   {
        console.log(`Something went wrong ${ex}`)
   }
   finally
   {
       //this block will always be executed and this will end the connection to database
       await client.end()
       console.log("Client disconnected successfully")
   }

   
}