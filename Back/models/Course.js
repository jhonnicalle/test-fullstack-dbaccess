const Sequelize = require('sequelize');
const db = require('../config/database');

const Courses = db.define('courses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }

  
});


Courses.associate = (models) => {
  Courses.belongsToMany(models.Instructor, {
    through: 'instructor_courses',
    as: 'instructors',
    foreignKey: 'id_course'
  });
};

module.exports = Courses;