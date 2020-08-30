const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config()

//API's Routes
const users = require("./routes/api/users");


//use bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Db configuration
const db = require("./confg/key").mongoURI;

//connect to db
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongoose conected successfully"))
  .catch((err) => console.log(err));

//use Routes
app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server running on port" + PORT));
