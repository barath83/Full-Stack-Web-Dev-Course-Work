const {Client} = require('pg');
const client = new Client({
    user : "postgres",
    password : "barathpriya83",
    host: "localhost",
    port : 5432,
    database : "postgres",
})

client.connect()
.then(() => console.log("Connected successfully"))
.then(() => client.query("select * from employees where name = $1",["Barath"]))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())