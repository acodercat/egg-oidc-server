'use strict';
module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;
  const Dept = app.model.define('dept', {
    id: {
      type: INTEGER, primaryKey: true, autoIncrement: true, unique: true
    },
    parent_id: {
      type: INTEGER, comment: "父id"
    },
    name: {
      type: STRING(32), allowNull: false, comment: "名称"
    },
    operator: {
      type: STRING(12), comment: "操作人"
    }
  });
  // Dept.sync({force: true});
  return Dept;
};
