const express = require('express');
const router = express.Router();
const db = require('../config/database');
const {createInstructor, getAllInstructor, getInstructorById, deleteInstructor} = require('../controller/instructor.controller')

//Get instructors list
router.get('/', getAllInstructor)
router.get('/:id', getInstructorById)
router.post('/', createInstructor)
router.delete('/:id', deleteInstructor)

module.exports = router;