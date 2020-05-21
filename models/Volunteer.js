const mongoose = require('./connection.js')

const VolunteerSchema = new mongoose.Schema({
    name: String,
    projectName:String,
    phoneNumber:String,
    emailAddress: String
})

const VolunteerModel = mongoose.model('volunteer', VolunteerSchema)

//GET ALL VOLUNTEER
function getAllVolunteers() {
    return VolunteerModel.find({})
}

//GET SINGLE VOLUNTEER
function getSingleVolunteer(volunteerId) {
    return VolunteerModel.findById(volunteerId)
}

//CREATE VOLUNTEER
function createVolunteer(volunteerData) {
    return VolunteerModel.create(volunteerData)
}

//UPDATE VOLUNTEER
function updateVolunteer(volunteerId, volunteerData) {
    return VolunteerModel.findByIdAndUpdate(volunteerId, volunteerData)
}

//DELETE VOLUNTEER
function deleteVolunteer(volunteerId) {
    return VolunteerModel.findByIdAndDelete(volunteerId)
}

module.exports = {
    getAllVolunteers,
    getSingleVolunteer,
    createVolunteer,
    updateVolunteer,
    deleteVolunteer
}