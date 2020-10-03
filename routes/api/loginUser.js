const router = require("express").Router();
const userInfoController = require("../../controllers/userInfoController");

router.route("/").get(userInfoController.Authenticate);

module.exports = router;
