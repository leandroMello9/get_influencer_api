const GetUserInfluencerGlobalService = require("../services/GetUserInfluencerGlobal");
const createUserService = require("../services/CreateUseInfuencer");
const GetUserService = require("../services/GetUserInfluencer");
const apiAuth = require("../config/axios");
const { createInfluencer } = require("../validators/UserInfluencer");
class UserInfluencerController {
  async show(request, response) {
    try {
      const { user_cpf } = request.query;
      await createInfluencer().validate(request.query);
      const user = await GetUserService.execute({
        user_cpf,
      });
      if (!user) {
        await createUserService.execute({
          user_cpf,
        });

        const userGlobal = await GetUserInfluencerGlobalService.execute({
          user_cpf,
        });

        if (!userGlobal) {
          return response.status(401).json({
            err: "Usuário não existe no global.",
          });
        }
        const { uuid } = userGlobal;
        await apiAuth.patch(`users/${uuid}/groups`, {
          action: "ADD",
          groups: ["INFLUENCER_FITVLOGGER"],
        });
        return response.status(200).json({
          message: "Usuário marcado como influencer",
        });
      }

      return response.status(200).json(user);
    } catch (err) {
      return response.status(404).json({
        message: err,
      });
    }
  }
}

module.exports = new UserInfluencerController();
