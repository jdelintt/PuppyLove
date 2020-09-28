const router = require("express").Router();
const userInfoRoutes = require("./userInfo");

// Book routes
router.use("/preference", userInfoRoutes);

module.exports = router;
