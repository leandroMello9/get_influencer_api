const { Sequelize,Model } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'db_fitvlooger_users_influencers',
        freezeTableName: true,
        timestamps: true
      }
    );
    // Antes de todo usuario se cadastro addHook sera executado de forma automatica

    return this;
  }
}
module.exports =  User;
