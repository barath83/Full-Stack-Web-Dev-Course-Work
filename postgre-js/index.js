//getting Client from the pg library for postgre using node
const {Client} = require('pg');
//providing the credentials for the connection 
const client = new Client({
    user : "",
    password : "",
    host: "",
    port : ,
    database : "",
})

//.connect will connect to the database 
//using a chain of .then() to proceed each step after it fulfill's prev step's promise and execution of the step
//this method doesn't need a try catch block it doesn't use async 
//it will be executed in a chain manner one after another
client.connect()
.then(() => console.log("Connected successfully"))
.then(() => client.query("select * from employees where name = $1",["Barath"]))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())
