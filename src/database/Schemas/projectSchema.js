const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  title_en: { type: String, required: false },

  subtitulo: { type: String, required: true },
  subtitulo_en: { type: String, required: false },

  description: { type: String, required: true },
  description_en: { type: String, required: false },

  tecnologic: { type: String, required: true },

  imagen: { type: String, required: true },

  url: { type: String, require: false },
});

projectSchema.statics.createProject = async function (data) {
  const project = new this(data);
  return await project.save();
};

projectSchema.statics.getAllProjects = async function () {
  return await this.find();
};

projectSchema.statics.updateProjectById = async function (id, data) {
  return await this.findByIdAndUpdate(id, data, { new: true });
};

projectSchema.statics.deleteProjectById = async function (id) {
  return await this.findByIdAndDelete(id);
};

projectSchema.statics.getProjectsByLanguage = async function ({ english }) {
  const projects = await this.find();
  return projects.map((project) => {
    if (english) {
      return {
        title: project.title_en || project.title,
        subtitulo: project.subtitulo_en || project.subtitulo,
        description: project.description_en || project.description,
        tecnologic: project.tecnologic,
        imagen: project.imagen,
        url: project.url,
      };
    } else {
      return {
        title: project.title,
        subtitulo: project.subtitulo,
        description: project.description,
        tecnologic: project.tecnologic,
        imagen: project.imagen,
        url: project.url,
      };
    }
  });
};

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;
