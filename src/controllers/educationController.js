const asyncHandler = require('express-async-handler')
const Education = require('../database/Schemas/educationSchema')

const educationController = () => ({
  list: asyncHandler(async (req, res) => {
    const educations = await Education.getAllEducations()
    res.json(educations)
  }),
  create: asyncHandler(async (req, res) => {
    const education = await Education.createEducation(req.body)
    res.status(201).json(education)
  }),
  update: asyncHandler(async (req, res) => {
    const education = await Education.updateEducationById(
      req.params.id,
      req.body,
    )
    if (!education) {
      res.status(404).json({ message: 'Education not found' })
    } else {
      res.json(education)
    }
  }),
  delete: asyncHandler(async (req, res) => {
    const education = await Education.deleteEducationById(req.params.id)
    if (!education) {
      res.status(404).json({ message: 'Education not found' })
    } else {
      res.json({ message: 'Education deleted' })
    }
  }),
})

module.exports = educationController
