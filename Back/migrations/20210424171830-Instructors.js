'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('instructors', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ci: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      speciality: {
        allowNull: false,
        type: Sequelize.STRING
      },
      year_expecience: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.dropTable('instructors');
  }
};
