const express = require('express');
const router = express.Router();
const db = require('../config/database');
const {createCourse, getAllCourses, getCourseById, deleteCourse, getNoInstructorsInCourse, setInstructorInCourse, getInstructorsInCourse, deleteIntructorCourse} = require('../controller/course.controller')

//Get instructors list
router.get('/', getAllCourses)
router.get('/:id', getCourseById)
router.get('/getDetails/:idCourse', getInstructorsInCourse)
router.get('/getInstructors/:idCourse', getNoInstructorsInCourse)
router.post('/registerInstructor', setInstructorInCourse)
router.post('/deleteInstructor', deleteIntructorCourse)
router.post('/', createCourse)
router.delete('/:id', deleteCourse)

module.exports = router;