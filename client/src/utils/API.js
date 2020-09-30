// const router = require("express").Router();
// const petInfoController = require("../../controllers/");
var axios = require("axios");

axios.get("api/userinfo", function (req, res) {});

export default {
  getDogs: function () {
    return axios.get("/api/userInfo");
  },

  createPref: function (data) {
    axios.post("/api/userInfo", data);
  },

  // this returns all of the dogs in the database
};
