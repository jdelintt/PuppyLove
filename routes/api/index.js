const router = require("express").Router();
const userInfoRoutes = require("./userInfo");
// const petfinderRoutes = require("./petfinder");

// Book routes
router.use("/userinfo", userInfoRoutes);
// router.use("/petfinder", petfinderRoutes);

module.exports = router;
