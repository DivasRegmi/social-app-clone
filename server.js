const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const path = require("path");
const compression =require('compression')

//API's Routes
const users = require("./routes/api/users");

//use bodyParser middleware
app.use(compression)
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server running on port" + PORT));
