const Sequelize = require('sequelize');
const db = require('../config/database');

const Instructor = db.define('instructors', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ci: {
    unique: true,
    type: Sequelize.STRING,
    allowNull: false
  },
  speciality: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year_experience: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Instructor.associate = (models) => {
  Instructor.belongsToMany(models.Courses, {
    through: 'instructor_courses',
    as: 'courses',
    foreignKey: 'id_instructor'
  });
};

module.exports = Instructor;