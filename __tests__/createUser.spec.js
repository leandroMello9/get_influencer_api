const User = require("../src/InMemory/models/UserInMemory");
const UserService = require("../src/InMemory/services/CreateUser");

describe("Teste unitario de criação de usuário", () => {
  it("Criando um usuário", async () => {
    const user = new User({
      id: Math.random(),
      cpf: "07533149599",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const userService = new UserService();
    const createUser = await userService.createUser(user);
    expect(user).toEqual(createUser);
  });
  it("Criando um usuário com o cpf de 12 caracteres", async () => {
    const user = new User({
      id: Math.random(),
      cpf: "075331495992",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const userService = new UserService();
    const createUser = await userService.createUser(user);
    expect(createUser).toEqual(null);
  });
  it("Criando um usuário com o cpf de 10 caracteres", async () => {
    const user = new User({
      id: Math.random(),
      cpf: "0753314959",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const userService = new UserService();
    const createUser = await userService.createUser(user);
    expect(createUser).toEqual(null);
  });
  it("Buscando um usuário existente", async () => {
    const userService = new UserService();
    const userFind = await userService.findOne("07533149599");
    expect(userFind);
  });
});
