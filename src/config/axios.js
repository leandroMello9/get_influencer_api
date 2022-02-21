const axios = require("axios");
const api = axios.create({
  baseURL: process.env.BASE_URL_AUTH,
});
module.exports = api;
