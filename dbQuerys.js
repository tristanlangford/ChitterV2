const client = require('./dbConfig')

    async function addUser(username, email, password) {
        await client.query(
            `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`
            )
    };

    async function userExists(username, password) {
        const user = await client.query(
            `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
        )
        return user
    }

    module.exports = { addUser, userExists }

