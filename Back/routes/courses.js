const express = require('express');
const router = express.Router();
const db = require('../config/database');
const {createCourse, getAllCourses, getCourseById, deleteCourse, getNoInstructorsInCourse, setInstructorInCourse} = require('../controller/course.controller')

//Get instructors list
router.get('/', getAllCourses)
router.get('/:id', getCourseById)
router.get('/getInstructors/:idCourse', getNoInstructorsInCourse)
router.post('/registerInstructor', setInstructorInCourse)
router.post('/', createCourse)
router.delete('/:id', deleteCourse)

module.exports = router;