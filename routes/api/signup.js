const express = require('express')
const router = express.Router()
const query = require('../../dbQuerys')

router.get('/', (req, res) => {
    res.render("signup")
})

router.post('/', (req, res) => {
    query.addUser(req.body.username, req.body.email, req.body.password);
    res.redirect('/')
})

module.exports = router