'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      行政职务
     */
    return queryInterface.createTable('administrative_post',
      {
        id: {
          type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true
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