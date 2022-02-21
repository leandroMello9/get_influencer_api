const { Router } = require("express");
const UserInfluencerController = require("../controllers/UserInfluencer");
const getAndCreateController = require("../controllers/GetUserAndCreate")
const { auth } = require("../middlewares/auth");
const { authGlobal } = require("../middlewares/authGlobal");
const usersInfluencerRoutes = Router();
usersInfluencerRoutes.use(auth);
usersInfluencerRoutes.use(authGlobal);
usersInfluencerRoutes.post("", UserInfluencerController.store);
usersInfluencerRoutes.get("", UserInfluencerController.show);
usersInfluencerRoutes.get("/getGlobal", getAndCreateController.show);


module.exports = usersInfluencerRoutes;
