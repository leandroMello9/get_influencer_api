const axios = require("axios");
const api = axios.create({
  baseURL: "https://api.dev.vieco.com.br/auth/v1",
});
module.exports = api;
