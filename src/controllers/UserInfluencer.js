const UserInfluencerService = require("../services/CreateUseInfuencer");
const GetUserService = require("../services/GetUserInfluencer");
const { createInfluencer } = require("../validators/UserInfluencer");
const expectError = require("../utils/Error");
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
      const { message, status } = expectError(err);
      return response.status(status).json({
        message,
      });
    }
  }
  async index(request, response) {
    return response.status(200).json({
      ok: true,
    });
  }
  async show(request, response) {
    try {
      const { user_cpf } = request.query;
      await createInfluencer().validate(request.query);
      const user = await GetUserService.execute({
        user_cpf,
      });
      return response.status(200).json(user);
    } catch (err) {
      const { message, status } = expectError(err);
      return response.status(status).json({
        message,
      });
    }
  }
  async delete(request, response) {}
}

module.exports = new UserInfluencerController();
