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
  //USERS
import AllProjects from './components/Project/AllProjects.js'
import SingleProject from './components/Project/SingleProject.js'



import './App.css';

class App extends Component {
  render () {
    return (
      <div>
      <h1></h1>
      <Router>
        <div>
          <Switch>

            <Route exact path="/" component={AllProjects}/>
            <Route exact path="/projects/:projectId" component={SingleProject}/>
            
            <Route exact path="/admin" component={CreateProject}/>
            <Route exact path="/admin/projects" component={AdminAllProjects}/>
            <Route exact path="/admin/projects/:projectId" component={AdminSingleProject}/>
            <Route exact path="/admin/org" component={CreateOrganization}/>
            <Route exact path="/admin/organizations" component={AdminAllOrganizations}/>
            <Route exact path="/admin/org/:organizationId" component={AdminSingleOrganization}/>



           
          </Switch>
        </div>
      </Router>
      </div>
    )
  }
}

export default App
