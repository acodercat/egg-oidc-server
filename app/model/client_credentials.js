'use strict';
module.exports = app => {
  const { DATE, Sequelize, JSON } = app.Sequelize;
  const ClientCredentials = app.model.define('client_credentials', {
    id: {
      type: Sequelize.STRING(64), primaryKey: true, unique: true
    },
    expires_at: {
      type: DATE, unique: true
    },
    data: {
      type: JSON, allowNull: true
    },
  });
  // ClientCredentials.sync({force: true});
  return ClientCredentials;
};
