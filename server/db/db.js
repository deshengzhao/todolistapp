//Database Connection

const { Client } = require("pg");

const client = new Client({
	connectionString: "postgresql://localhost/todolistapp"
});

client.connect();

module.exports = client;