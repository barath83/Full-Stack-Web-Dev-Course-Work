const {Pool} = require('pg')

const client = new Pool({
    user : "postgres",
    password : "barathpriya83",
    host: "localhost",
    port : 5432,
    database : "postgres",
});


module.exports = client;