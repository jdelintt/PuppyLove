LOGINUSER.JS;

const router = require("express").Router();
const unserInfoController = require("../../controllers/userInfoController");

router.route("/").get(unserInfoController.findAllUsers);

module.exports = router;
