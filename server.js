const express = require('express')
const projectRouter = require('./controllers/project.js')
const organizationRouter = require('./controllers/organization.js')
const volunteerRouter = require('./controllers/volunteer.js')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))

app.use('/api/projects', projectRouter)
app.use('/api/organizations', organizationRouter)
app.use('/api/volunteers', volunteerRouter)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`)
})