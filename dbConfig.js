const { Client } = require('pg')
require('dotenv').config();

if (process.env.ENV === 'test') {
    client = new Client({
        database: process.env.DB_NAME_TEST
    });
} else {
    client = new Client({
        database: process.env.DB_NAME
    });
};

client.connect()

module.exports = client


