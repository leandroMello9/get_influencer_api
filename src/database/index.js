const Sequelize = require("sequelize");

const dataBaseConfig = require("../config/database");

const UserInfluencerModel = require("../models/UserInfluencer");

const models = [UserInfluencerModel];
class Database {
  constructor() {
    this.init();
  }

  init() {
    try {
      this.connection = new Sequelize(dataBaseConfig);
      models.map((model) => {
        model.init(this.connection);
      });
    } catch (err) {
      console.log("error connect database");
    }
  }
}

module.exports = new Database();
