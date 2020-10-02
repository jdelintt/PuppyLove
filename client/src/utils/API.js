// const router = require("express").Router();
// const petInfoController = require("../../controllers/");
var axios = require("axios");

export default {
  getDogs: function () {
    return axios.get("/api/userinfo");
  },

  createPref: function (data) {
    axios.post("/api/userinfo", data);
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
