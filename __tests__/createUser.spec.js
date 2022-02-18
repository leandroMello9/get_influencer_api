const UserModeInMemory = require("../src/inMemory/models/CreateUserInMemory");
const CreateUserInMemory = require("../src/inMemory/services/CreateUser");
describe("Created User Influencer", () => {
  it("Created User", () => {
    
    const user = new UserModeInMemory({
      id: 1,
      cpf: "07533149599",
    });
    

    const { user: newUser } = new CreateUserInMemory(user);
    expect(newUser).toEqual(user);
  });
});
