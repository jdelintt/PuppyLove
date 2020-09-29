const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userCred = new Schema({
  //userinfo
  userinfo: {
    credidentails: {
      id: { type: String },
      password: { type: String },
    },
    name: { type: String },
  },
});

module.exports = userCred;
