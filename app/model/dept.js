'use strict';
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const Dept = app.model.define('dept', {
    id: {
      type: INTEGER, primaryKey: true, autoIncrement: true, unique: true
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
