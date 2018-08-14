'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('account',
      {
        id: {
          type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true
        },
        username: {
          type: Sequelize.STRING(32), allowNull: false, unique: true
        },
        password: {
          type: Sequelize.STRING(32), allowNull: false
        },
        is_lock: {
          type: Sequelize.BOOLEAN, comment: "是否锁定", defaultValue: false
        },
        client_ids: {
          type: Sequelize.JSON, comment: "所能登录的客户端id"
        },
        created_at: {
          type: Sequelize.DATE, unique: true
        },
        updated_at: {
          type: Sequelize.DATE, unique: true
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
