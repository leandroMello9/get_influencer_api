const { Router } = require("express")
const UserInfluencerController = require("../controllers/UserInfluencer")
const { auth } = require("../middlewares/auth")

const usersInfluencerRoutes = Router();
usersInfluencerRoutes.use(auth)
usersInfluencerRoutes.post("", UserInfluencerController.store)
usersInfluencerRoutes.get("", UserInfluencerController.show)

module.exports = usersInfluencerRoutes