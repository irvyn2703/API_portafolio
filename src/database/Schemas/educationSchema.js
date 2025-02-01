const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  title_en: { type: String, required: false },

  subtitulo: { type: String, required: true },
  subtitulo_en: { type: String, required: false },

  description: { type: String, required: true },
  description_en: { type: String, required: false },

  fecha: { type: String, required: true },
  fecha_en: { type: String, required: false },

  imagen: { type: String, required: true },
});

educationSchema.statics.createEducation = async function (data) {
  const education = new this(data);
  return await education.save();
};

educationSchema.statics.getAllEducations = async function () {
  return await this.find();
};

educationSchema.statics.updateEducationById = async function (id, data) {
  return await this.findByIdAndUpdate(id, data, { new: true });
};

educationSchema.statics.deleteEducationById = async function (id) {
  return await this.findByIdAndDelete(id);
};

const Education = mongoose.model("educations", educationSchema);

module.exports = Education;
