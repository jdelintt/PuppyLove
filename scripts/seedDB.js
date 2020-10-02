const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books belowd

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/doggydata");

const dogSeed = [
  {
    name: "Henry",
    breed: "German Shepard",
    age: 9,
    energyLevel: 8,
    imagePath: "German.jpg",
    allergies: 0,
    comments: [],
  },
  {
    name: "Fred",
    breed: "Shar Pei",
    age: 5,
    energyLevel: 5,
    imagePath: "Shar_Pei.jpg",
    allergies: 2,
    comments: [],
  },
  {
    name: "James",
    breed: "Border Collie",
    age: 4,
    energyLevel: 9,
    imagePath: "Border_Collie.jpg",
    allergies: 1,
    comments: [],
  },
  {
    name: "Freddy",
    breed: "Dacshund",
    age: 2,
    energyLevel: 7,
    imagePath: "Dachshund.jpg",
    allergies: 1,
    comments: [],
  },
  {
    name: "Happy",
    breed: "Labradoodle",
    age: 4,
    energyLevel: 10,
    imagePath: "Labradoodle.jpeg",
    allergies: 1,
    comments: [],
  },
  {
    name: "Morgan",
    breed: "Pitbull",
    age: 5,
    energyLevel: 2,
    imagePath: "PitBull_Morgan.jpg",
    allergies: 0,
    comments: [],
  },
  {
    name: "Peanut",
    breed: "Jack Russell Terrier",
    age: 1,
    energyLevel: 9,
    imagePath: "Jack_Russell_Terrier_1.jpg",
    allergies: 1,
    comments: [],
  },
  {
    name: "Lilly",
    breed: "Bull Terrier",
    age: 3,
    energyLevel: 6,
    imagePath: "BullTerrier.jpg",
    allergies: 2,
    comments: [],
  },
  {
    name: "Codsworth",
    breed: "Sheepdog",
    age: 3,
    energyLevel: 8,
    imagePath: "Sheepdog.jpg",
    allergies: 1,
    comments: [],
  },
  {
    name: "Emilio",
    breed: "Border Collie",
    age: 2,
    energyLevel: 6,
    imagePath: "Border_Collie_Emilio.jpg",
    allergies: 0,
    comments: [],
  },
  {
    name: "Mr. Snuggles",
    breed: "Labrador",
    age: 7,
    energyLevel: 4,
    imagePath: "Labrador.jpg",
    allergies: 1,
    comments: [],
  },
  {
    name: "Mrs. Snuggles",
    breed: "Shar Pei",
    age: 3,
    energyLevel: 6,
    imagePath: "Shar_Pei_Snuggles.png",
    allergies: 1,
    comments: [],
  },
  {
    name: "Beebee",
    breed: "Terrier Mix",
    age: 1,
    energyLevel: 5,
    imagePath: "TerrierMixed.jpeg",
    allergies: 0,
    comments: [],
  },
  {
    name: "Cacahuate",
    breed: "Chihuahua",
    age: 3,
    energyLevel: 4,
    imagePath: "Chihuahua.jpg",
    allergies: 1,
    comments: [],
  },
  {
    name: "Frank",
    breed: "Bulldog",
    age: 7,
    energyLevel: 4,
    imagePath: "BullDog.jpg",
    allergies: 0,
    comments: [],
  },
  {
    name: "Alejandro",
    breed: "Maltese",
    age: 6,
    energyLevel: 3,
    imagePath: "Maltese.jpg",
    allergies: 1,
    comments: [],
  },
  {
    name: "Melvin",
    breed: "Dalmatian",
    age: 6,
    energyLevel: 8,
    imagePath: "Dalmatian.jpeg",
    allergies: 0,
    comments: [],
  },
];

// console.log(db.userInfo);
db.UserInfo.deleteOne({})
  .then(() => db.UserInfo.collection.insertMany(dogSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
