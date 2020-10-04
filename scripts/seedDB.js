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
    interactedWith: Boolean,
  },
  {
    name: "Fred",
    breed: "Shar Pei",
    age: 5,
    energyLevel: 5,
    imagePath: "Shar_Pei.jpg",
    allergies: 2,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "James",
    breed: "Border Collie",
    age: 4,
    energyLevel: 9,
    imagePath: "Border_Collie.jpg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Freddy",
    breed: "Dacshund",
    age: 2,
    energyLevel: 7,
    imagePath: "Dachshund.jpg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Happy",
    breed: "Labradoodle",
    age: 4,
    energyLevel: 10,
    imagePath: "Labradoodle.jpeg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Morgan",
    breed: "Pitbull",
    age: 5,
    energyLevel: 2,
    imagePath: "PitBull_Morgan.jpg",
    allergies: 0,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Peanut",
    breed: "Jack Russell Terrier",
    age: 1,
    energyLevel: 9,
    imagePath: "Jack_Russell_Terrier_1.jpg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Lilly",
    breed: "Bull Terrier",
    age: 3,
    energyLevel: 6,
    imagePath: "BullTerrier.jpg",
    allergies: 2,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Codsworth",
    breed: "Sheepdog",
    age: 3,
    energyLevel: 8,
    imagePath: "Sheepdog.jpg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Emilio",
    breed: "Border Collie",
    age: 2,
    energyLevel: 6,
    imagePath: "Border_Collie_Emilio.jpg",
    allergies: 0,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Mr. Snuggles",
    breed: "Labrador",
    age: 7,
    energyLevel: 4,
    imagePath: "Labrador.jpg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },

  {
    name: "Abby",
    breed: "Labrador",
    age: 9,
    energyLevel: 3,
    imagePath: "labrador1.jpeg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Ace",
    breed: "Labrador",
    age: 11,
    energyLevel: 2,
    imagePath: "Labrador2.jpeg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Allie",
    breed: "Labrador",
    age: 5,
    energyLevel: 3,
    imagePath: "Labrador3.jpeg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Apollo",
    breed: "Labrador",
    age: 9,
    energyLevel: 3,
    imagePath: "Labrador4.jpeg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Molly",
    breed: "Labrador",
    age: 6,
    energyLevel: 4,
    imagePath: "Labrador5.jpeg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Boomer",
    breed: "Labrador",
    age: 11,
    energyLevel: 2,
    imagePath: "Labrador6.jpeg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Nala",
    breed: "Labrador",
    age: 7,
    energyLevel: 4,
    imagePath: "Labrador7.jpeg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Chance",
    breed: "Labrador",
    age: 5,
    energyLevel: 2,
    imagePath: "Labrador8.jpeg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Sadie",
    breed: "Labrador",
    age: 8,
    energyLevel: 2,
    imagePath: "Labrador9.jpeg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Lucky",
    breed: "Labrador",
    age: 7,
    energyLevel: 2,
    imagePath: "Labrador10.jpeg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },

  {
    name: "Mrs. Snuggles",
    breed: "Shar Pei",
    age: 3,
    energyLevel: 6,
    imagePath: "Shar_Pei_Snuggles.png",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Beebee",
    breed: "Terrier Mix",
    age: 1,
    energyLevel: 5,
    imagePath: "TerrierMixed.jpeg",
    allergies: 0,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Cacahuate",
    breed: "Chihuahua",
    age: 3,
    energyLevel: 4,
    imagePath: "Chihuahua.jpg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Frank",
    breed: "Bulldog",
    age: 7,
    energyLevel: 4,
    imagePath: "BullDog.jpg",
    allergies: 0,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Alejandro",
    breed: "Maltese",
    age: 6,
    energyLevel: 3,
    imagePath: "Maltese.jpg",
    allergies: 1,
    comments: [],
    interactedWith: Boolean,
  },
  {
    name: "Melvin",
    breed: "Dalmatian",
    age: 6,
    energyLevel: 8,
    imagePath: "Dalmatian.jpeg",
    allergies: 0,
    comments: [],
    interactedWith: Boolean,
  },
];

// console.log(db.userInfo);
db.DogStatic.deleteOne({})
  .then(() => db.DogStatic.collection.insertMany(dogSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
