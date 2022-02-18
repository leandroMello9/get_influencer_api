const users = [];
class CreateUser {
  constructor(user) {
    this.user = user;
    return this;
  }
  async createUser() {
    users.push(this.user);
    return this.user;
  }
}

module.exports = CreateUser;
