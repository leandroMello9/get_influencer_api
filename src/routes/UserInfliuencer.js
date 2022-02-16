const { Router } = require("express")
const UserInfluencerController = require("../controllers/UserInfluencer")
const usersInfluencerRoutes = Router();


usersInfluencerRoutes.post("", UserInfluencerController.store)
usersInfluencerRoutes.get("", UserInfluencerController.ready)

module.exports = usersInfluencerRoutes