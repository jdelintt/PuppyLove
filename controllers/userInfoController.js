const db = require("../models");
console.log(db);

// interacting with database
module.exports = {
  createUser: function (req, res) {
    db.UserSchema.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  Authenticate: function (req, res, next) {
    console.log("Authentication funtion hit");
    db.UserSchema.findOne({ username: req.body.username }, function (
      error,
      username
    ) {
      if (error) throw error;
      if (username) {
        console.log("if statement accessed");
        username.comparePassword(req.body.password, function (error, isMatch) {
          console.log("it matched!");
          if (error) throw error;

          res.json(username);
        });
      } else {
        res.status(404).send("Inavlid login info");
      }
    });
  },
  findAll: function (req, res) {
    db.DogStatic.find({})
      .sort({ name: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.UserInfo.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    //breed, malepref, femalepref, size, age, energylevel, allergies
    // console.log(req.body);

    //console logs breed
    // console.log(req.body.breed);
    // console.log(db.UserInfo);
    db.UserInfo.create(req.body);
    console
      .log(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.UserInfo.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          userinfo: req.body.user,
          breed: req.body.breed,
          malePref: req.body.malePref,
          femalePref: req.body.femalePref,
          size: req.body.size,
          age: req.body.age,
          energylevel: req.body.energylevel,
          allergies: req.body.allergies,
        },
      }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.UserInfo.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findDog: function (req, res) {
    db.UserInfo.findById({ name: "Henry" })
      .then((dbModel) => res.json(dbModel))

      .catch((err) => res.status(422).json(err));
  },
};
