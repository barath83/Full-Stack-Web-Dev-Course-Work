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
.then(() => client.query("insert into employees values ($1, $2)",[17,'John']))
.then(() => client.query("select * from employees"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())