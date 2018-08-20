'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      岗位
     */
    return queryInterface.createTable('post',
      {
        id: {
          type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true
        },
        parent_id: {
          type: Sequelize.INTEGER, comment: "父id"
        },
        name: {
          type: Sequelize.STRING(32), allowNull: false, comment: "名称"
        },
        remark: {
          type: Sequelize.TEXT, comment: "备注"
        },
        operator: {
          type: Sequelize.STRING(12), comment: "操作人"
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
