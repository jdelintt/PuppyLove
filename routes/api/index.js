const router = require("express").Router();
const preferenceRoutes = require("./dogs");

router.use("/preference", preferenceRoutes);

module.exports = router;
