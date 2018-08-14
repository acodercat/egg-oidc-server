'use strict';
module.exports = app => {
  const { INTEGER, JSON, STRING, BOOLEAN } = app.Sequelize;
  const Account = app.model.define('account', {
    id: {
      type: INTEGER, primaryKey: true, autoIncrement: true, unique: true
    },
    username: {
      type: STRING(32), allowNull: false, unique: true
    },
    password: {
      type: STRING(32), allowNull: false
    },
    is_lock: {
      type: BOOLEAN, comment: "是否锁定", defaultValue: false
    },
    client_ids: {
      type: JSON, comment: "所能登录的客户端id"
    }
  });

  // instanceMethods
  // classMethods
  // Account.sync({force: true});
  Account.associate = function() {
    Account.hasOne(app.model.AccountBasicInfo, { as: 'basicInfo', foreignKey: 'account_id' });

  }

  return Account;
};
