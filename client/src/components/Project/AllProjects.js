import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

     
export default class AllProjects extends Component {
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

    render() {
        return (
            <div class='all-projects'>
                {this.state.AllProjects.map((projects, index) => {
                    return (
                        <div  key={`jd320kd-${index}`}>
                            
                            <img src={projects.image}/>
                            <div>{projects.name}</div>
                            
                            <div>{projects.location}</div>
                            <Link to={`/projects/${projects._id}`}>
                                <div>Click here for more info...</div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}
