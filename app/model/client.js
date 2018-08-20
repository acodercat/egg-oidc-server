'use strict';
module.exports = app => {
  const { STRING, JSON } = app.Sequelize;
  const Client = app.model.define('client', {
    id: {
      type: STRING(64), primaryKey: true, unique: true
    },
    name: {
      type: STRING(12), comment: "客户端名称"
    },
    client_secret: {
      type: STRING(128)
    },
    data: {
      type: JSON, allowNull: true
    }
  });
  // Client.sync({force: true});
  return Client;
};
