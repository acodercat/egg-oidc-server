'use strict';
module.exports = app => {
  const { INTEGER, STRING, JSON, ENUM, SMALLINT } = app.Sequelize;
  const AccountBasicInfo = app.model.define('account_basic_info', {
    id: {
      type: INTEGER, primaryKey: true, autoIncrement: true, unique: true
    },
    account_id: {
      type: INTEGER, unique: true
    },
    name: {
      type: STRING(32), allowNull: false, comment: "姓名"
    },
    sex: {
      type: ENUM(1, 2), comment: "性别，1男，2女"
    },
    age: {
      type: SMALLINT, comment: "年龄"
    },
    phone_number: {
      type: STRING(11), comment: "手机号"
    },
    nation: {
      type: SMALLINT, comment: "民族"
    },
    id_card_no: {
      type: STRING(16), comment: "身份证号"
    },
    dept_ids: {
      type: JSON, comment: "部门"
    },
    job_title: {
      type: STRING(32), comment: "职称"
    },
    posts: {
      type: JSON, comment: "岗位"
    }
  });
  // AccountBasicInfo.sync({force: true});

  AccountBasicInfo.associate = function() {
    // AccountBasicInfo.belongsTo(app.model.Account, { as: 'account', foreignKey: 'account_id' });
  }


  return AccountBasicInfo;
};
