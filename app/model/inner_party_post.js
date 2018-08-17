'use strict';
module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;
  const InnerPartyPost = app.model.define('inner_party_post', {
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
  // InnerPartyPost.sync({force: true});
  return InnerPartyPost;
};
