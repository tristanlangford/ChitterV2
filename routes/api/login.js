const express = require('express')
const router = express.Router()
const Query = require('../../dbQuerys')
var session = require('express-session')

router.post('/', (req, res) => {
    Query.userExists(req.body.username, req.body.password).then(
    function(data) {
    if (data.rows.length === 0) {
        res.redirect('/')
    } else {
        req.session.user = data.rows[0].id;
        req.session.username = data.rows[0].username
        console.log(req.session.user)
        res.redirect('/feed')
    }})
})

module.exports = router