const express = require('express');
const app = express();
const path = require("path");
var exphbs  = require('express-handlebars');
var session = require('express-session')

//states the port to run on 
app.listen(3000)

// allows use of json data and form data
app.use(express.json())
app.use(express.urlencoded({ encoded: false }))

app.use(
    session({
      secret: 'Shh, its a secret!',
      cookie: {},
      resave: false,
      saveUninitialized: true,
    })
  );

// sets up view engine

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use("/", require("./routes/api/index.js"))
app.use("/signup", require("./routes/api/signup.js"))
app.use("/login", require("./routes/api/login.js"))