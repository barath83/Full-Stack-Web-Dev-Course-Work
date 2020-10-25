const {Client} = require('pg');

const client = new Client({
    user : "postgres",
    password : "barathpriya83",
    host: "localhost",
    port : 5432,
    database : "postgres",
})

//always should call the function to execute the code
execute()


//asynchronous method 
async function execute() {

    try{
        //first connects to the client 
        await client.connect()
        //begins transaction
        await client.query("BEGIN")
        //inserting values into specific table using sql query 
        await client.query("insert into employees values ($1,$2)",[18,'Virat'])
        console.log("Inserted new row")
        //changes will be reflected in the database only if the the transaction is committed 
        //for eg is the id field is unique and we already have an id named 18 there will be an error within the transaction
        //so if there are any other queries which can be executed without errors,yet the whole transaction will fail as the changes are not committed
        //and we won't have any changes reflected in the database
        await client.query("COMMIT")
    }
    catch(er)
    {
        //error message will be printed out and the transaction will rollback with immediate effect
        console.log(`There is an error ${er}`);
        await client.query("ROLLBACK")
    }
    finally {
        //finally block will always be executed
        //the connection will end 
        await client.end();
        console.log("Closed connection")
    }

    
}