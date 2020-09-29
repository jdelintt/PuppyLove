const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
  userinfo: {
    credidentails: {
      id: { type: String },
      password: { type: String },
    },
    name: { type: String },
  },
  name: String,
  breed: [{ type: String }],
  size: { type: Number },
  age: { type: Number },
  energyLevel: { type: Number },
  history: {
    dogs: [{ type: Array, default: [] }],
  },
  userBackgroundCheck: { type: Boolean },
  image: String,
});

const User = mongoose.model("User", UserInfoSchema);

module.exports = User;
