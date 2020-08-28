const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema

const UserHack = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  app: {
    type:String,
    required: true,
  }

});

module.exports = mongoose.model("userhacks", UserHack);
