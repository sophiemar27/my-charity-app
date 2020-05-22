import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AdminEditProject extends Component {
    state = {
             image: '',
             name: '',
            location: '',
            description: '', 
    }

    componentDidMount(){
        this.getSingleProject()
    }


    getSingleProject = async () => {
        const projectId = this.props.match.params.projectId
        console.log('projectId', projectId)
        const res = await axios.get(`/api/projects/${projectId}`)
        this.setState(res.data)
    }

    onDeleteProject = async (projectId) => {
        await axios.delete(`/api/projects/${projectId}`)
        
    }

    

    render() {
        const projectId = this.props.match.params.projectId
        return (
            <div>
                <h1>Admin Single Page</h1>
                <div><img src={this.state.image}/></div>
                
                <div>{this.state.name}</div>
                <div>{this.state.location}</div>
                <div>{this.state.description}</div>
                {/* <button onClick={() => this.onDeleteProject(projectId)}>Delete</button>  */}
            </div>
        )
    }
}