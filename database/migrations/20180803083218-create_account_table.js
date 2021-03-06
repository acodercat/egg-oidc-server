'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
       账号
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
