const express = require('express')
const projectModel = require('../models/Project.js')

const projectRouter = express.Router()


//GET ALL PROJECTS
projectRouter.get('/', async (req, res) => {
    try{
      const allProjects = await projectModel.getAllProjects()
      res.json(allProjects)
    } catch (err) {
        res.statusCode(500).json(err)
        console.log(err)
    }
})

//GET SINGLE PROJECT
projectRouter.get('/:projectId', async (req, res) => {
    try{
        const singleProject = await projectModel.getSingleProject(req.params.projectId)
        res.json(singleProject)
    } catch (err) {
        res.statusCode(500).json(err)
        console.log(err)
    }
})

//CREATE PROJECT
projectRouter.post('/', async (req, res) => {
    try {
        await projectModel.createProject(req.body)
        res.json('Ok')
    } catch (err) {
        res.statusCode(500).json(err)
        console.log(err)
    }
})
//UPDATE PROJECT
projectRouter.put('/:projectId', async (req, res) => {
    try {
        await projectModel.updateProject(req.params.projectId, req.body)
        res.json('Ok')
    } catch (err) {
        res.statusCode(500).json(err)
        console.log(err)
    }
})
//DELETE PROJECT
projectRouter.delete('/:projectId', async (req, res) => {
    try {
        await projectModel.deleteProject(req.params.projectId)
        res.json('Ok')
    } catch (err) {
        res.statusCode(500).json(err)
        console.log(err)
    }
})

module.exports = projectRouter