/** Database connection for messagely. */


const { Client } = require("pg");
const { DB_URI, DB_PASSWORD } = require("./config");

const client = new Client({
    host : DB_URI,
    port : 5334,
    user : 'postgres',
    password : DB_PASSWORD
});

client.connect();


module.exports = client;
