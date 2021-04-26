const Sequelize = require('sequelize');
const db = require('../config/database');

const InstructorCourse = db.define('instructor_courses', {
  id_course: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Course',
      key: 'id'
    }
  },
  id_instructor: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Instructor',
      key: 'id'
    }
  }


});

InstructorCourse.associate = (models) => {
  InstructorCourse.belongsTo(models.Courses, { 
    foreignKey: 'id_course', 
    as: 'courses' 
  });
  InstructorCourse.belongsTo(models.Instructor, { 
    foreignKey: 'id_course', 
    as: 'instructors' 
  });
};

module.exports = InstructorCourse;