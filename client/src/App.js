import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link } 
  from 'react-router-dom'
  //ADMIN
import CreateProject from './components/Admin/CreateProject.js'
import AdminAllProjects from './components/Admin/AdminAllProjects.js'
import AdminSingleProject from './components/Admin/AdminSinglePorjects.js'
import CreateOrganization from './components/Admin/AdminCreateOrg.js'
import AdminAllOrganizations from './components/Admin/AdminAllOrg.js'
import AdminSingleOrganization from './components/Admin/AdminSingleOrg.js'
// import CreateVolunteer from './components/Admin/AdminCreateVolunteer.js'
import AdminAllVolunteers from './components/Admin/AdminAllVolunteers.js'
import AdminSingleVolunteer from './components/Admin/AdminSingleVolunteer.js'
  //USERS
import AllProjects from './components/Project/AllProjects.js'
import SingleProject from './components/Project/SingleProject.js'
import AllOrganizations from './components/Organization/AllOrganizations.js'
import SingleOrganization from './components/Organization/SingleOrg.js'
import CreateVolunteer from './components/Volunteer/CreateVolunteer.js'
import Confirmation from './components/Volunteer/Confirmation.js'




import './App.css';

class App extends Component {
  render () {
    return (
      <div className="nav-bar">
      {/* <img className='banner' src={'https://f0.pngfuel.com/png/346/468/volunteering-international-volunteer-day-labor-organization-person-others-png-clip-art.png'}/> */}
      <Router>

      <nav className="nav-bar">
          <Link to="/">
          <i className="material-icons logo">
          Hope
          </i>
          </Link>
            
          
          <Link to="/home">
            <div className="link-item">Home</div>
          </Link>
          <Link to="/">
            <div className="link-item">Projects</div>
          </Link>
          <Link to="/all_orgs">
            <div className="link-item">Organizations</div>
          </Link>
          <Link to="/about">
            {/* <div className="link-item">About Us</div> */}
          </Link>
        </nav>
        
        <div className='app-all-project'>
          <Switch>

            {/* USERS */}
            <Route exact path="/" component={AllProjects}/>
            <Route exact path="/projects/:projectId" component={SingleProject}/>
            <Route exact path="/all_orgs" component={AllOrganizations}/>
            <Route exact path="/organizations/:organizationId" component={SingleOrganization}/>
            <Route exact path="/create_volunteer" component={CreateVolunteer}/>
            <Route exact path="/Confirmation/:volunteerId" component={Confirmation}/>
           
            
            {/* ADMI */}
            <Route exact path="/admin" component={CreateProject}/>
            <Route exact path="/admin/projects" component={AdminAllProjects}/>
            <Route exact path="/admin/projects/:projectId" component={AdminSingleProject}/>
            <Route exact path="/admin/org" component={CreateOrganization}/>
            <Route exact path="/admin/organizations" component={AdminAllOrganizations}/>
            <Route exact path="/admin/org/:organizationId" component={AdminSingleOrganization}/>
            {/* <Route exact path="/admin/volunteer" component={CreateVolunteer}/> */}
            <Route exact path="/admin/Volunteers" component={AdminAllVolunteers}/>
            <Route exact path="/admin/volunteers/:volunteerId" component={AdminSingleVolunteer}/>



           
          </Switch>
        </div>
      </Router>
      </div>
    )
  }
}

export default App
