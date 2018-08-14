'use strict';
module.exports = app => {
  const { DATE, Sequelize, JSON } = app.Sequelize;
  const AccessToken = app.model.define('access_token', {
    id: {
      type: Sequelize.STRING(64), primaryKey: true, unique: true
    },
    grant_id: {
      type: Sequelize.STRING(64), unique: true
    },
    expires_at: {
      type: DATE, unique: true
    },
    data: {
      type: JSON, allowNull: true
    }
  });
  // AccessToken.sync({force: true});
  return AccessToken;
};
