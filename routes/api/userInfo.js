const router = require("express").Router();
const unserInfoController = require("../../controllers/userInfoController");

// Matches with "/api/userinfo"
router
  .route("/")
  .get(unserInfoController.findAll)
  .post(unserInfoController.create);

// Matches with "/api/userinfo/:id"
router
  .route("/:id")
  .get(unserInfoController.findById)
  .put(unserInfoController.update)
  .delete(unserInfoController.remove);

module.exports = router;

//dummydata
// { "userinfo": {
//   "credidentails": {
//     "id": "Andrew",
//     "password": "passowrd123"
//   },
//   "name": "Andrew"
// },
// "name": "Andrew",
// "breed": "Shiba",
// "size": 123,
// "age": 5,
// "energyLevel": 3,
// "history": {
//   "dogs": []
// },
// "matchedDogs": {
//   "dogs": []
// },
// "userBackgroundCheck": true,
// "image": "url"
// }
