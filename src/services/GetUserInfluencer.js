const userModel = require("../models/UserInfluencer");

class GetUserInfluencer {
  async execute({ user_cpf }) {
    return new Promise(async (resolve, reject) => {
      try {
        const userExist = await userModel.findOne({
          where: { cpf: user_cpf },
        });
        if (!userExist) {
          resolve(null)

        }

        resolve(userExist);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new GetUserInfluencer();
