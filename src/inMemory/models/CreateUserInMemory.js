class CreateUserInMemory {
  constructor({ id, cpf }) {
    this.id = id;
    this.cpf = cpf;
    return this;
  }
}

module.exports = CreateUserInMemory;
