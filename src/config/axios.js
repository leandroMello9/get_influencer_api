const axios = require("axios");
const api = axios.create({
  baseURL: "https://alb.dev.vieco.com.br/ms-auth/v1",
});
module.exports = api;
