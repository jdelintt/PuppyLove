const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
  //userinfo
  userinfo: {
    credidentails: {
      id: { type: String },
      password: { type: String },
    },
    name: { type: String },
  },
  //dog pref
  name: { type: String },
  breed: [{ type: String }],
  size: { type: Number },
  age: { type: Number },
  energyLevel: { type: Number },
  //mainpage
  history: {
    dogs: [{ type: Array, default: [] }],
  },
  matchedDogs: {
    dogs: [{ type: Array, default: [] }],
  },
  userBackgroundCheck: { type: Boolean },
  image: String,
});

const UserInfo = mongoose.model("User", UserInfoSchema);

module.exports = UserInfo;
