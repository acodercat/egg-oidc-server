'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      党内职务
     */
    return queryInterface.createTable('inner_party_post',
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
