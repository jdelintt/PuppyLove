const router = require("express").Router();
const userInfoRoutes = require("./userInfo");
const createUser = require("./newUser");
const db = require("../../models");

router.use("/userinfo", userInfoRoutes);

router.use("/createuser", createUser);

router.get("/userdata/:id", (req, res) => {
  console.log(req.params.id);
  db.UserSchema.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

module.exports = router;
