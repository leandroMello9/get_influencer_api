require("dotenv").config();

const request = require("supertest");

const { app } = require("../src/app");

const tokenAuth = process.env.SECRET_MS_INFLUENCER_APP_TOKEN
jest.useRealTimers();
describe("Criando usuário influenciador", () => {
  it("Passando  token errado de autenticação da aplicação", async () => {
    const newUser = {
      user_cpf: "07615469519",
    };

    await request(app)
      .post("/userInfluencer")
      .set({ "app-token": "sdas#@!#$" })
      .send(newUser)
      .then((r) => {
        expect(r.status).toEqual(401);
      });
  });
   it("Tentando criar um influencer já criado.", async () => {
    const newUser = {
      user_cpf: "07615469519",
    };

    await request(app)
      .post("/userInfluencer")
      .set({ "app-token": tokenAuth })
      .send(newUser)
      .then((r) => {
        expect(r.status).toEqual(400);
      });
   });
   it("Criando um influencer", async () => {
    const newUser = {
      user_cpf: "07615469514",
    };

    await request(app)
      .post("/userInfluencer")
      .set({ "app-token": tokenAuth})
      .send(newUser)
      .then((r) => {
        expect(r.status).toEqual(201);
      });
   });
   it("Criando um influencer com o atributo cpf incorreto", async () => {
    const newUser = {
      user_cp: "07615469514",
    };

    await request(app)
      .post("/userInfluencer")
      .set({ "app-token": tokenAuth})
      .send(newUser)
      .then((r) => {
        expect(r.status).toEqual(422);
      });
   });
   it("Criando um influencer com o cpf menor que 11 caracteres", async () => {
    const newUser = {
      user_cpf: "076154695",
    };

    await request(app)
      .post("/userInfluencer")
      .set({ "app-token": tokenAuth})
      .send(newUser)
      .then((r) => {
        expect(r.status).toEqual(422);
      });
   });
   it("Criando um influencer com o cpf maior que 11 caracteres", async () => {
    const newUser = {
      user_cpf: "0761546952030",
    };

    await request(app)
      .post("/userInfluencer")
      .set({ "app-token": tokenAuth})
      .send(newUser)
      .then((r) => {
        expect(r.status).toEqual(422);
      });
   });
   it("Adicionando o grupo de influencer a um usuário no global", async () => {
    const newUser = {
      user_cpf: "07615469520",
    };

    await request(app)
      .get(`/userInfluencer/getGlobal?user_cpf=${newUser.user_cpf}`)
      .set({ "app-token": tokenAuth})
      .then((r) => {
        expect(r.status).toEqual(200);
      });
   }, 10000);
   it("Adicionando o grupo de influencer a um usuário que não existe no fitvlogger e no global", async () => {
    const newUser = {
      user_cpf: "07615469515",
    };

    await request(app)
      .get(`/userInfluencer/getGlobal?user_cpf=${newUser.user_cpf}`)
      .set({ "app-token": tokenAuth})
      .then((r) => {
        expect(r.status).toEqual(404);
      });
   });
});
