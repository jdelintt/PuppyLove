const router = require("express").Router();
const userInfoController = require("../../controllers/userInfoController");

router.route("/:id").post(userInfoController.updateComment);

module.exports = router;
