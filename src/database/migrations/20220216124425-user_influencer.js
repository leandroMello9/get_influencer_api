"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("db_fitvlooger_users_influencers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /*
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.bulkDelete("db_fitvlooger_users_influencer", null, {});
  },
};
