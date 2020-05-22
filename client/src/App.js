import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } 
  from 'react-router-dom'
import AllProjects from './components/AllProjects.js'
import CreateProject from './components/CreateProject.js'


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
            <Route exact path="/admin" component={CreateProject}/>

           
          </Switch>
        </div>
      </Router>
      </div>
    )
  }
}

export default App
