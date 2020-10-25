const {Client} = require('pg');
const client = new Client({
    user : "postgres",
    password : "barathpriya83",
    host: "localhost",
    port : 5432,
    database : "postgres",
});

execute()

async function execute(){
   
   try{
    await client.connect()
    console.log("Connected successfully");
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
       await client.end()
       console.log("Client disconnected successfully")
   }

   
}