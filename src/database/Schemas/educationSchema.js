const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitulo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
})

educationSchema.statics.createEducation = async function (data) {
  const education = new this(data)
  return await education.save()
}

educationSchema.statics.getAllEducations = async function () {
  return await this.find()
}

educationSchema.statics.updateEducationById = async function (id, data) {
  return await this.findByIdAndUpdate(id, data, { new: true })
}

educationSchema.statics.deleteEducationById = async function (id) {
  return await this.findByIdAndDelete(id)
}

const Education = mongoose.model('educations', educationSchema)

module.exports = Education
