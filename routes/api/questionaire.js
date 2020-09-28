const router = require("express").Router();
const preferenceController = require("../../controllers/preferenceController");

// Matches with "/api/books"
router
  .route("/")
  .get(preferenceController.findAll)
  .post(preferenceController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(preferenceController.findById)
  .put(preferenceController.update)
  .delete(preferenceController.remove);

module.exports = router;
