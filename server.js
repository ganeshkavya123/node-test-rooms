
const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

require('./app/routes/rooms.routes')(app);
require('./app/routes/auth.routes')(app);
// set port, listen for requests
app.listen(process.env.PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
