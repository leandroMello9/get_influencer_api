class CreateUserInMemory {
  constructor({ id, cpf, createdAt, updatedAt }) {
    this.id = id;
    this.cpf = cpf;
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    return this;
  }
}

module.exports = CreateUserInMemory;
