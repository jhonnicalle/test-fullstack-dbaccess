const Course = require('../models/Course');
const Instructor = require('../models/Instructor');
const {Sequelize} = require('sequelize');
const { sequelize } = require('../models/Course');

// GET ALL COURSES
const getAllCourses = async (req,res) => {
  const courseList = await Course.findAll();
  if(!courseList) {
    return res.status(500).json({success: false})
  }
  res.send(courseList)
}

//GET COURSE BY ID
const getCourseById = async (req,res) => {
  const {id} = req.params;
  const course = await Course.findOne({
    where: {
      id
    }
  });
  if(!course) {
    return res.status(500).json({success: false, message: "There is no course"})
  }
  res.send(course)
}

// GET INSTRUCTORS THAT THERE ARE NOT IN THE COURSE
const getNoInstructorsInCourse = async (req,res) => {
  const {idCourse} = req.params;
  const instructorListNoInCourse = await sequelize.query(`SELECT * from instructors where id NOT IN (SELECT B.id_instructor from courses as A, instructor_course as B WHERE A.id = B.id_course AND A.id = ${idCourse})`);
  res.send(instructorListNoInCourse[0])
}

// GET INSTRUCTORS THAT THERE ARE IN THE COURSE
const getInstructorsInCourse = async (req,res) => {
  const {idCourse} = req.params;
  const instructorListInCourse = await sequelize.query(`SELECT  B.* FROM instructors as B LEFT JOIN instructor_course as A ON B.id = A.id_instructor WHERE A.id_course = ${idCourse}`);
  // if(!instructorListNoInCourse) {
  //   return res.status(500).json({success: false, message: "There is no course"})
  // }
  res.send(instructorListInCourse[0])
}

// ADD INSTRUCTOR TO COURSE
const setInstructorInCourse = async (req,res) => {
  const {idCourse, idInstructor} = req.body;
  try {
    const instructorInCourse = await sequelize.query(`INSERT INTO instructor_course (id_course, id_instructor) VALUES (${idCourse},${idInstructor})`);
    if(instructorInCourse) {
      return res.status(200).json({
        message: 'New Register',
        data: instructorInCourse
      })
    }
  } catch (error) {
    return res.status(500).json({success: false, message: "Something went wrong", error})
  }
  
}

//CREATE A COURSE
const createCourse = async (req,res) => {
  try {
    let newCourse = await Course.create({
      name: req.body.name
    });

    if(newCourse) {
      return res.status(200).json({
        message: 'New Course',
        data: newCourse
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong'
    })
  }
}

// DELETE A COURSE
const deleteCourse = async (req,res) => {
  try {
    const id = req.params.id;
    const deleteRowCount = await Course.destroy({
      where: {
        id
      }
    });

    if(!deleteRowCount) { 
      return res.status(200).json({success: false, message: "There is no instructor"})
    }

    res.status(200).json({success: true, message: "Instructor deleted", count: deleteRowCount})
  } catch (error) {
    return res.status(404).json({success: false, message: "Something went wrong!", error})
  }
}


// DELETE A INSTRUCTOR FROM COURSE
const deleteIntructorCourse = async (req,res) => {
  try {
    const {idCourse, idInstructor} = req.body;
    const deleteRowCount = await sequelize.query(`DELETE FROM instructor_course WHERE id_course = ${idCourse} AND id_instructor = ${idInstructor}`);

    if(!deleteRowCount) { 
      return res.status(400).json({success: false, message: "There is no register"})
    }

    res.status(200).json({success: true, message: "Instructor deleted", count: deleteRowCount})
  } catch (error) {
    return res.status(404).json({success: false, message: "Something went wrong!", error})
  }
}


module.exports = {createCourse, getAllCourses, getCourseById, deleteCourse, getNoInstructorsInCourse, setInstructorInCourse, getInstructorsInCourse, deleteIntructorCourse}