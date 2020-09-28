const router = require("express").Router();
const preferenceRoutes = require("./books");

// Book routes
router.use("/preference", preferenceRoutes);

module.exports = router;
