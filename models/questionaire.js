const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionaireSchema = new Schema({
  breed: { type: String, required: true },
  size: { type: Interger, required: true },
  age: { type: Interger, required: true },
  energyLevel: { type: Interger, required: true },
});

const Dogs = mongoose.model("Dogs", questionaireSchema);

module.exports = Dogs;
