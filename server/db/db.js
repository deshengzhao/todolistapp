//Database Connection

const { Client } = require("pg");

const client = new Client({
	connectionString: "todolistapp_database://postgres:password@localhost:5432/todolistapp"
});

client.connect();

module.exports = client;