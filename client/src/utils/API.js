var axios = require("axios");

export default {
  CreateNewUser: function (data) {
    return axios.post("/api/createuser", data);
  },

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
