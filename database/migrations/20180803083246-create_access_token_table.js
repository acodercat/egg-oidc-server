'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('access_token',
      {
        id: {
          type: Sequelize.STRING(64), primaryKey: true, unique: true
        },
        grant_id: {
          type: Sequelize.STRING(64), unique: true
        },
        expires_at: {
          type: Sequelize.DATE, unique: true
        },
        data: {
          type: Sequelize.JSON
        },
        created_at: {
          type: Sequelize.DATE
        },
        updated_at: {
          type: Sequelize.DATE
        },
        deleted_at: {
          type: Sequelize.DATE
        }
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
