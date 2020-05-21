const express = require('express')
const volunteerModel = require('../models/Volunteer.js')

const volunteerRouter = express.Router()


//GET ALL VOLUNTEERS
volunteerRouter.get('/', async (req, res) => {
    try{
      const allVolunteers = await volunteerModel.getAllVolunteers()
      res.json(allVolunteers)
    } catch (err) {
        res.statusCode(500).json(err)
        console.log(err)
    }
})

//GET SINGLE VOLUNTEER
volunteerRouter.get('/:volunteerId', async (req, res) => {
    try{
        const singleVolunteer = await volunteerModel.getSingleVolunteer(req.params.volunteerId)
        res.json(singleVolunteer)
    } catch (err) {
        res.statusCode(500).json(err)
        console.log(err)
    }
})

//CREATE VOLUNTEER
volunteerRouter.post('/', async (req, res) => {
    try {
        await volunteerModel.createVolunteer(req.body)
        res.json('Ok')
    } catch (err) {
        res.statusCode(500).json(err)
        console.log(err)
    }
})
//UPDATE VOLUNTEER
volunteerRouter.put('/:volunteerId', async (req, res) => {
    try {
        await volunteerModel.updateVolunteer(req.params.volunteerId, req.body)
        res.json('Ok')
    } catch (err) {
        res.statusCode(500).json(err)
        console.log(err)
    }
})
//DELETE VOLUNTEER
volunteerRouter.delete('/:volunteerId', async (req, res) => {
    try {
        await volunteerModel.deleteVolunteer(req.params.volunteerId)
        res.json('Ok')
    } catch (err) {
        res.statusCode(500).json(err)
        console.log(err)
    }
})

module.exports = volunteerRouter