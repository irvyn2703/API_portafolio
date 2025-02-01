const asyncHandler = require("express-async-handler");
const Project = require("../database/Schemas/projectSchema");

const projectsController = () => ({
  list: asyncHandler(async (req, res) => {
    const projects = await Project.getAllProjects();
    res.json(projects);
  }),
  create: asyncHandler(async (req, res) => {
    const project = await Project.createProject(req.body);
    res.status(201).json(project);
  }),
  getById: asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res.status(404).json({ message: "Project not found" });
    } else {
      res.json(project);
    }
  }),
  update: asyncHandler(async (req, res) => {
    const project = await Project.updateProjectById(req.params.id, req.body);
    if (!project) {
      res.status(404).json({ message: "Project not found" });
    } else {
      res.json(project);
    }
  }),
  delete: asyncHandler(async (req, res) => {
    const project = await Project.deleteProjectById(req.params.id);
    if (!project) {
      res.status(404).json({ message: "Project not found" });
    } else {
      res.json({ message: "Project deleted" });
    }
  }),
  listByLanguage: asyncHandler(async (req, res) => {
    const english = req.query.english === "true";
    const project = await Project.getProjectsByLanguage({ english });
    if (!project) {
      res.status(404).json({ message: "Project not found" });
    } else {
      res.json(project);
    }
  }),
});

module.exports = projectsController;
