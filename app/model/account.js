'use strict';
module.exports = app => {
  const { INTEGER, JSON, STRING } = app.Sequelize;
  const Account = app.model.define('account', {
    id: {
      type: INTEGER, primaryKey: true, autoIncrement: true, unique: true
    },
    username: {
      type: STRING(32), allowNull: false
    },
    password: {
      type: STRING(32), allowNull: false
    },
    client_ids: {
      type: JSON, allowNull: true
    },
  });
  // Account.sync({force: true});
  return Account;
};
