// const router = require("express").Router();
// const petInfoController = require("../../controllers/");
var axios = require("axios");

axios.get("api/userinfo", function (req, res) {});

export default {
  findAll: function () {
    return axios.get("/api/userinfo");
  },

  createPref: function (data) {
    axios.post("/api/userinfo", data);
  },
};
