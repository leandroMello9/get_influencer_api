const userModel = require("../models/UserInfluencer");

class UserInfluencer {
  async execute({ user_cpf }) {
    return new Promise(async (resolve, reject) => {
      try {
        const userExist = await userModel.findOne({
          where: { cpf: user_cpf },
        });
        if (userExist) {
          throw new Error("User exist in database")
        }
        const user = await userModel.create({
          cpf: user_cpf,
        });
        resolve(user);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new UserInfluencer();
