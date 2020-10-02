const router = require("express").Router();
const unserInfoController = require("../../controllers/userInfoController");

router.route("/").post(unserInfoController.createUser);

module.exports = router;
