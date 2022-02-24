const users = [];
class CreateUser {
  constructor(user) {
    this.users = user;
    return this;
  }
  async createUser(user) {
    try {
      const oneUser = users.find((user) => user.cpf === "cpf");

      if (oneUser) {
        return null;
      }
      if (user.cpf.length < 11 || user.cpf.length > 11) {
        return null;
      }

      users.push(user);
      return user;
    } catch (err) {
      console.log(err);
    }
  }
  async findOne(cpf) {
    const oneUser = users.find((user) => user.cpf === cpf);
    if (!oneUser) {
      return null;
    }
    return oneUser;
  }
}

module.exports = CreateUser;
