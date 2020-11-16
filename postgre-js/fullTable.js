const {Client} = require('pg');
const client = new Client({
    user : "",
    password : "",
    host: "",
    port : ,
    database : "",
})

client.connect()
.then(() => console.log("Connected successfully"))
.then(() => client.query("insert into employees values ($1, $2)",[17,'John']))
.then(() => client.query("select * from employees"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())
