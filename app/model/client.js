'use strict';
module.exports = app => {
  const { STRING, JSON } = app.Sequelize;
  const Client = app.model.define('client', {
    id: {
      type: STRING(64), primaryKey: true, unique: true
    },
    data: {
      type: JSON, allowNull: true
    },
  });
  // Client.sync({force: true});
  return Client;
};
