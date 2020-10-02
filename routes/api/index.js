const router = require("express").Router();
const userInfoRoutes = require("./userInfo");
const createUser = require("./newUser");

router.use("/userinfo", userInfoRoutes);

router.use("/createuser", createUser);

module.exports = router;
