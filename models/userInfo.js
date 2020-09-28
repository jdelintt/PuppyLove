const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
  userinfo: {
    credidentails: {
      id: { type: string, required: true },
      password: { type: string, required: true },
    },
    name: { type: String, required: true },
  },
  breed: [{ type: String, required: true }],
  size: { type: Interger, required: true },
  age: { type: Interger, required: true },
  energyLevel: { type: Interger, required: true },
  history: {
    dogs: [{ type: Array, default: [], required: true }],
  },
  userBackgroundCheck: { type: Boolean, required: true },
});
