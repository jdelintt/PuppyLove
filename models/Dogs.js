// {
//     name: "Mrs. Snuggles",
//     breed: "Shar Pei",
//     age: 3,
//     energyLevel: 6,
//     imagePath: "Shar_Pei_Snuggles.png",
//     allergies: 1,
//     comments: [],
//   },

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Doggo = new Schema({
  name: String,
  breed: String,
  age: Number,
  energyLevel: Number,
  imagePath: String,
  allergies: Number,
  comments: {
    type: Array,
    default: [],
  },
});

const Dogs = mongoose.model("DogStatic", Doggo);

module.exports = Dogs;
