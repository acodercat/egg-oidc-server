'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      客户端
    */
    return queryInterface.createTable('client',
      {
        id: {
          type: Sequelize.STRING(64), primaryKey: true, unique: true
        },
        data: {
          type: Sequelize.JSON, allowNull: true
        },
        name: {
          type: Sequelize.STRING(12), comment: "客户端名称"
        },
        client_secret: {
          type: Sequelize.STRING(128)
        },
        created_at: {
          type: Sequelize.DATE
        },
        updated_at: {
          type: Sequelize.DATE
        },
        deleted_at: {
          type: Sequelize.DATE
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
