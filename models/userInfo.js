const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
  //userinfo
  userinfo: { type: String },
  //dog pref
  breed: [{ type: String }],
  malePref: { type: Boolean },
  femalePref: { type: Boolean },
  size: { type: Number },
  age: { type: Number },
  energyLevel: { type: Number },
  allergies: { type: String },
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
