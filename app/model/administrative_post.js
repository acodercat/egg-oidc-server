'use strict';
module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;
  const AdministrativePost = app.model.define('administrative_post', {
    id: {
      type: INTEGER, primaryKey: true, autoIncrement: true, unique: true
    },
    name: {
      type: STRING(32), allowNull: false, comment: "名称"
    },
    remark: {
      type: TEXT, comment: "备注"
    },
    operator: {
      type: STRING(12), comment: "操作人"
    }
  });
  // AdministrativePost.sync({force: true});
  return AdministrativePost;
};
