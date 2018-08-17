'use strict';
module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;
  const Post = app.model.define('post', {
    id: {
      type: INTEGER, primaryKey: true, autoIncrement: true, unique: true
    },
    parent_id: {
      type: INTEGER, comment: "父id"
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
  // Post.sync({force: true});
  return Post;
};
