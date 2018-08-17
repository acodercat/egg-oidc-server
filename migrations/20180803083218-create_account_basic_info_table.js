'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      账号基本信息
     */
    return queryInterface.createTable('account_basic_info',
      {
        id: {
          type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true
        },
        account_id: {
          type: Sequelize.INTEGER, unique: true
        },
        name: {
          type: Sequelize.STRING(32), allowNull: false, comment: "姓名"
        },
        sex: {
          type: Sequelize.ENUM(1, 2), comment: "性别，1男，2女"
        },
        age: {
          type: Sequelize.SMALLINT, comment: "年龄"
        },
        phone_number: {
          type: Sequelize.STRING(11), comment: "手机号"
        },
        nation: {
          type: Sequelize.SMALLINT, comment: "民族"
        },
        id_card_no: {
          type: Sequelize.STRING(16), comment: "身份证号"
        },
        dept_ids: {
          type: Sequelize.JSON, comment: "部门"
        },
        administrative_post_id: {
          type: Sequelize.INTEGER, comment: "行政职务"
        },
        inner_party_post_id: {
          type: Sequelize.INTEGER, comment: "党内职务"
        },
        job_title: {
          type: Sequelize.STRING(32), comment: "职称"
        },
        post_ids: {
          type: Sequelize.JSON, comment: "岗位"
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
