const router = require("express").Router();
const userInfoController = require("../../controllers/userInfoController");

// Matches with "/api/userinfo"
router
  .route("/")
  .get(userInfoController.findAll)
  .post(userInfoController.create);

// Matches with "/api/userinfo/:id"
router
  .route("/:id")
  .get(userInfoController.findById)
  .put(userInfoController.update)
  .delete(userInfoController.remove);

module.exports = router;
