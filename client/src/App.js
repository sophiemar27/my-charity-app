import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } 
  from 'react-router-dom'
  //ADMIN
import CreateProject from './components/Admin/CreateProject.js'
import AdminAllProjects from './components/Admin/AdminAllProjects.js'
import AdminSingleProject from './components/Admin/AdminSinglePorjects.js'
import CreateOrganization from './components/Admin/AdminCreateOrg.js'
import AdminAllOrganizations from './components/Admin/AdminAllOrg.js'
import AdminSingleOrganization from './components/Admin/AdminSingleOrg.js'
import CreateVolunteer from './components/Admin/AdminCreateVolunteer.js'
import AdminAllVolunteers from './components/Admin/AdminAllVolunteers.js'
  //USERS
import AllProjects from './components/Project/AllProjects.js'
import SingleProject from './components/Project/SingleProject.js'
import AllOrganizations from './components/Organization/AllOrganizations.js'
import SingleOrganization from './components/Organization/SingleOrg.js'




import './App.css';

class App extends Component {
  render () {
    return (
      <div>
      <img className='banner' src={'https://f0.pngfuel.com/png/346/468/volunteering-international-volunteer-day-labor-organization-person-others-png-clip-art.png'}/>
      <Router>
        <div>
          <Switch>

            {/* USERS */}
            <Route exact path="/" component={AllProjects}/>
            <Route exact path="/projects/:projectId" component={SingleProject}/>
            <Route exact path="/all_orgs" component={AllOrganizations}/>
            <Route exact path="/organizations/:organizationId" component={SingleOrganization}/>
           
            
            {/* ADMI */}
            <Route exact path="/admin" component={CreateProject}/>
            <Route exact path="/admin/projects" component={AdminAllProjects}/>
            <Route exact path="/admin/projects/:projectId" component={AdminSingleProject}/>
            <Route exact path="/admin/org" component={CreateOrganization}/>
            <Route exact path="/admin/organizations" component={AdminAllOrganizations}/>
            <Route exact path="/admin/org/:organizationId" component={AdminSingleOrganization}/>
            <Route exact path="/admin/volunteer" component={CreateVolunteer}/>
            <Route exact path="/admin/Volunteers" component={AdminAllVolunteers}/>



           
          </Switch>
        </div>
      </Router>
      </div>
    )
  }
}

export default App
