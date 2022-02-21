const apiAuth = require("../config/axios");
class GetUserInfluencer {
  async execute({ user_cpf }) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await apiAuth.get(
          `/users/contact?document=${user_cpf}`
        );

        if (!data) {
          reject();
        }
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new GetUserInfluencer();
