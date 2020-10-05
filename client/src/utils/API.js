var axios = require("axios");

export default {
  checkUser: function (data) {
    return axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://www.JailBase.com/api/1/recent/?" +
          "source_id=" +
          data.Sherrif +
          "&" +
          "last_name=" +
          data.lastName
      )
      .then(console.log(data.lastName));
  },

  AuthenticateUser: function (data) {
    return axios.post("/api/loginUser", data);
  },
  CreateNewUser: function (data) {
    return axios.post("/api/createuser", data);
  },

  getDogs: function () {
    return axios.get("/api/userinfo");
  },
  getCurrentUser(id) {
    return axios.get("/api/userdata/" + id);
  },

  createPref: function (data) {
    axios.post("/api/userinfo", data);
  },

  createPrefdog: function (data) {
    axios.post("/api/userinfo/:dogid", data);
  },

  requestData: function () {
    axios.get("/api/userinfo/:id");
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
