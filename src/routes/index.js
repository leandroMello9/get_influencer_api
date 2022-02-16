const app = require("express");
const routes = app();

const usersInfluencerRoutes = require("./UserInfliuencer");

routes.use("/userInfluencer", usersInfluencerRoutes);


module.exports = routes;
