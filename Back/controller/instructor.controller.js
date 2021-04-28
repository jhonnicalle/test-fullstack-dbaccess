const Instructor = require('../models/Instructor');

const createInstructor = async (req,res) => {
  try {
    let newInstructor = await Instructor.create({
      name: req.body.name,
      ci: req.body.ci,
      speciality: req.body.speciality,
      year_experience: req.body.yearExperience
    });

    if(newInstructor) {
      return res.status(200).json({
        message: 'New instructor',
        data: newInstructor
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong'
    })
  }
}

const getAllInstructor = async (req,res) => {
  const instructorList = await Instructor.findAll();
  if(!instructorList) {
    return res.status(500).json({success: false})
  }
  res.send(instructorList)
}

const getInstructorById = async (req,res) => {
  const id = req.params.id;
  const instructor = await Instructor.findOne({
    where: {
      id
    }
  });

  if(!instructor) {
    return res.status(200).json({success: false, message: "There is no instructor"})
  }

  res.send(instructor)
}

const deleteInstructor = async (req,res) => {
  try {
    const id = req.params.id;
    const deleteRowCount = await Instructor.destroy({
      where: {
        id
      }
    });

    if(!deleteRowCount) { 
      return res.status(404).json({success: false, message: "There is no instructor"})
    }

    res.status(200).json({success: true, message: "Instructor deleted", count: deleteRowCount})
  } catch (error) {
    return res.status(404).json({success: false, message: "Something went wrong!", error})
  }
  
}

module.exports = {createInstructor, getAllInstructor, getInstructorById, deleteInstructor}