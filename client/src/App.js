import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } 
  from 'react-router-dom'
  //ADMIN
import CreateProject from './components/Admin/CreateProject.js'
import AdminAllProjects from './components/Admin/AdminAllProjects.js'
import AdminDeleteProject from './components/Admin/AdminDelete.js'
  //USERS
import AllProjects from './components/AllProjects.js'
import SingleProject from './components/SingleProject.js'



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
            <Route exact path="/admin/projects/projectId" component={AdminDeleteProject}/>


           
          </Switch>
        </div>
      </Router>
      </div>
    )
  }
}

export default App
