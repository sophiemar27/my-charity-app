import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

     
export default class AdminAllProjects extends Component {
    state = {
        projects: {
             image: '',
             name: '',
            location: '',
            description: '', 
        },
        AllProjects: []
    }

    componentDidMount() {
        this.getAllProjects()
    }
 
    getAllProjects = async () => {
        try {
            const res = await axios.get('/api/projects')
            const newState = { ...this.state }
            newState.AllProjects = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get all project')
            console.log(error)
        }

    }

    onDeleteProject = async (projectId) => {
        await axios.delete(`/api/projects/${projectId}`)
        this.getAllProjects()
    }

    

    render() {
        return (
            <div class='all-projects'>
                {this.state.AllProjects.map((projects, index) => {
                    return (
                        <div key={`jd320kd-${index}`}>
                            <img src={projects.image}/>
                            <Link to={`/admin/projects/${projects._id}`}>
                            <div>{projects.name}</div>
                            </Link>
                            <div>{projects.location}</div>
                            <button onClick={() => this.onDeleteProject(projects._id)}>Delete</button> 
                            
                            <button>Edit</button>

                            
                        </div>
                    )
                })}
            </div>
        )
    }
}