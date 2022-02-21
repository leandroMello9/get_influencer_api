const userModel = require("../models/UserInfluencer");
const apiAuth = require("../config/axios");
class UserInfluencer {
  async execute({ user_cpf }) {
    return new Promise(async (resolve, reject) => {
      try {
        const userExist = await userModel.findOne({
          where: { cpf: user_cpf },
        });
        if (userExist) {
          throw new Error("Usuário já cadastrado");
        }
        const user = await userModel.create({
          cpf: user_cpf,
        });

        resolve(user);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }
}

module.exports = new UserInfluencer();
