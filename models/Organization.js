const mongoose = require('./connection.js')

const OrganizationSchema = new mongoose.Schema({
    name: String,
    description: String,
    phoneNumber: String,
    emailAddress:String
})

const OrganizationModel = mongoose.model('organization', OrganizationSchema)

//GET ALL ORGANIZATION
function getAllOrganizations() {
    return OrganizationModel.find({})
}

//GET SINGLE ORGANIZATION
function getSingleOrganization(organizationId) {
    return OrganizationModel.findById(organizationId)
}

//CREATE ORGANIZATION
function createOrganization(organizationData) {
    return OrganizationModel.create(organizationData)
}

//UPDATE ORGANIZATION
function updateOrganization(organizationId, organizationData) {
    return OrganizationModel.findByIdAndUpdate(organizationId, organizationData)
}

//DELETE ORGANIZATION
function deleteOrganization(organizationId) {
    return OrganizationModel.findByIdAndDelete(organizationId)
}

module.exports = {
    getAllOrganizations,
    getSingleOrganization,
    createOrganization,
    updateOrganization,
    deleteOrganization
}