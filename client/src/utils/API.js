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

  getRandomDog: function () {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function (breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function () {
    return axios.get("https://dog.ceo/api/breeds/list");
  },
};
