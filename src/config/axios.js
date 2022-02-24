const axios = require("axios");
const api = axios.create({
  baseURL: process.env.CONS_MS_INFLUENCER_BASE_URL_AUTH,
});
module.exports = api;
