const client = require('./dbConfig')

    async function addUser(username, email, password) {
        await client.query(
            `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`
            )
    };

exports.addUser = addUser
