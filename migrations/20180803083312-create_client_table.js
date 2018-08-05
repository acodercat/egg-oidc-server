'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('client',
      {
        id: {
          type: Sequelize.STRING(64), primaryKey: true, unique: true
        },
        data: {
          type: Sequelize.JSON, allowNull: true
        },
        created_at: {
          type: Sequelize.DATE, unique: true
        },
        updated_at: {
          type: Sequelize.DATE, unique: true
        },
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
