const mongoose = require('./connection.js')

const ProjectSchema = new mongoose.Schema({
    image: String,
    name: String,
    location:String,
    description:String
})

const ProjectModel = mongoose.model('project', ProjectSchema)

//GET ALL PROJECT
function getAllProjects() {
    return ProjectModel.find({})
}

//GET SINGLE PROJECT
function getSingleProject(projectId) {
    return ProjectModel.findById(projectId)
}

//CREATE PROJECT
function createProject(projectData) {
    return ProjectModel.create(projectData)
}

//UPDATE PROJECT
function updateProject(projectId, projectData) {
    return ProjectModel.findByIdAndUpdate(projectId, projectData)
}

//DELETE PROJECT
function deleteProject(projectId) {
    return ProjectModel.findByIdAndDelete(projectId)
}

module.exports = {
    getAllProjects,
    getSingleProject,
    createProject,
    updateProject,
    deleteProject
}