const express = require('express');
const app = express()
const path = require("path")

app.listen(3000)

app.use("/", (req, res) => res.send("Hello World"))