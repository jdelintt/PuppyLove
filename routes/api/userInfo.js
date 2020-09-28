const router = require("express").Router();
const unserInfoController = require("../../controllers/userInfoController");

// Matches with "/api/books"
router
  .route("/")
  .get(unserInfoController.findAll)
  .post(unserInfoController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(unserInfoController.findById)
  .put(unserInfoController.update)
  .delete(unserInfoController.remove);

module.exports = router;
