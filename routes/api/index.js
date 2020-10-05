const router = require("express").Router();
const userInfoRoutes = require("./userInfo");
const createUser = require("./newUser");
const loginUser = require("./loginUser");
const db = require("../../models");
const updateData = require("./Update");

router.use("/userinfo", userInfoRoutes);

router.use("/update", updateData);

router.use("/createuser", createUser);

router.use("/loginUser", loginUser);

router.get("/userdata/:id", (req, res) => {
  console.log(req.params.id);
  db.UserSchema.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

module.exports = router;
