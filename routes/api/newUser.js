const router = require("express").Router();
const userInfoController = require("../../controllers/userInfoController");

router.route("/").post(userInfoController.createUser);

module.exports = router;
