const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/doggydata");

const dogSeed = [
  {
    name: "Henry",
    breed: "German Shepard",
    age: 9,
    energyLevel: 8,
    imagePath: "/dogpics/German.jpg",
  },
  {
    name: "Fred",
    breed: "Shar Pei",
    age: 5,
    energyLevel: 5,
    imagePath: "/dogpics/Shar_Pei.jpg",
  },
  {
    name: "James",
    breed: "Border Collie",
    age: 4,
    energyLevel: 9,
    imagePath: "/dogpics/Border_Collie.jpg",
  },
  {
    name: "Freddy",
    breed: "Dacshund",
    age: 2,
    energyLevel: 7,
    imagePath: "/dogpics/Dachshund.jpg",
  },
  {
    name: "Happy",
    breed: "Labradoodle",
    age: 4,
    energyLevel: 10,
    imagePath: "/dogpics/Labradoodle.jpg",
  },
  {
    name: "Morgan",
    breed: "Pitbull",
    age: 5,
    energyLevel: 2,
    imagePath: "/dogpics/Pitbull_Morgan.jpg",
  },
  {
    name: "James",
    breed: "Jack Russell Terrier",
    age: 1,
    energyLevel: 9,
    imagePath: "/dogpics/Border_Collie.jpg",
  },
  {
    name: "Lilly",
    breed: "Bull Terrier",
    age: 3,
    energyLevel: 6,
    imagePath: "/dogpics/BullTerrier.jpg",
  },
  {
    name: "Codsworth",
    breed: "Sheepdog",
    age: 3,
    energyLevel: 8,
    imagePath: "/dogpics/Sheepdog",
  },
  {
    name: "Emilio",
    breed: "Border Collie",
    age: 2,
    energyLevel: 6,
    imagePath: "/dogpics/Border_Collie_Emilio.jpg",
  },
  {
    name: "Mr. Snuggles",
    breed: "Labrador",
    age: 7,
    energyLevel: 4,
    imagePath: "/dogpics/Labrador.jpg",
  },
  {
    name: "Mrs. Snuggles",
    breed: "Shar Pei",
    age: 3,
    energyLevel: 6,
    imagePath: "/dogpics/Shar_Pei_Snuggles.jpg",
  },
  {
    name: "Beebee",
    breed: "Terrier Mix",
    age: 1,
    energyLevel: 5,
    imagePath: "/dogpics/TerrierMixed.jpg",
  },
  {
    name: "Cacahuate",
    breed: "Chihuahua",
    age: 3,
    energyLevel: 4,
    imagePath: "/dogpics/Chihuahua",
  },
  {
    name: "Frank",
    breed: "Bulldog",
    age: 7,
    energyLevel: 4,
    imagePath: "/dogpics/BullDog.jpg",
  },
  {
    name: "Alejandro",
    breed: "Maltese",
    age: 6,
    energyLevel: 3,
    imagePath: "/dogpics/Maltese.jpg",
  },
  {
    name: "Melvin",
    breed: "Dalmatian",
    age: 6,
    energyLevel: 8,
    imagePath: "/dogpics/Dalmatian.jpg",
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
