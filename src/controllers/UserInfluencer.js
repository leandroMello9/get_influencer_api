const UserInfluencerService = require("../services/CreateUseInfuencer");
const GetUserService = require("../services/GetUserInfluencer");
const { createInfluencer } = require("../validators/UserInfluencer");
class UserInfluencerController {
  async store(request, response) {
    try {
      const { user_cpf } = request.body;
      await createInfluencer().validate(request.body);
      const user = await UserInfluencerService.execute({
        user_cpf,
      });
      return response.status(201).json(user);
    } catch (err) {
      return response.status(404).json({
        message: err.message,
      });
    }
  }
  async index(request, response) {
    return response.status(200).json({
      ok: true,
    });
  }
  async ready(request, response) {
    try {
      const { user_cpf } = request.query;
      await createInfluencer().validate(request.query);
      const user = await GetUserService.execute({
        user_cpf,
      });
      return response.status(200).json(user);
    } catch (err) {
      return response.status(404).json({
        message: err.message,
      });
    }
  }
  async delete(request, response) {}
}

module.exports = new UserInfluencerController();
