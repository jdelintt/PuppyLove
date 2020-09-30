const router = require("express").Router();
const userInfoRoutes = require("./userInfo");

// Book routes
router.use("/userinfo", userInfoRoutes);
// router.use("/petfinder", petfinderRoutes);

module.exports = router;
