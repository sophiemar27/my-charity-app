const express = require('express')
const organizationModel = require('../models/Organization.js')

const organizationRouter = express.Router()


//GET ALL ORGANIZATIONS
organizationRouter.get('/', async (req, res) => {
    try{
      const allOrganizations = await organizationModel.getAllOrganizations()
      res.json(allOrganizations)
    } catch (err) {
        res.statusCode(500).json(err)
        console.log(err)
    }
})

//GET SINGLE ORGANIZATION
organizationRouter.get('/:organizationId', async (req, res) => {
    try{
        const singleOrganization = await organizationModel.getSingleOrganization(req.params.organizationId)
        res.json(singleOrganization)
    } catch (err) {
        res.statusCode(500).json(err)
        console.log(err)
    }
})

//CREATE ORGANIZATION
organizationRouter.post('/', async (req, res) => {
    try {
        await organizationModel.createOrganization(req.body)
        res.json('Ok')
    } catch (err) {
        res.statusCode(500).json(err)
        console.log(err)
    }
})
//UPDATE ORGANIZATION
organizationRouter.put('/:organizationId', async (req, res) => {
    try {
        await organizationModel.updateOrganization(req.params.organizationId, req.body)
        res.json('Ok')
    } catch (err) {
        res.statusCode(500).json(err)
        console.log(err)
    }
})
//DELETE ORGANIZATION
organizationRouter.delete('/:organizationId', async (req, res) => {
    try {
        await organizationModel.deleteOrganization(req.params.organizationId)
        res.json('Ok')
    } catch (err) {
        res.statusCode(500).json(err)
        console.log(err)
    }
})

module.exports = organizationRouter