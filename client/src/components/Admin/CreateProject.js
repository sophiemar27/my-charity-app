import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class CreateProject extends Component {
    state = {
        newProject: {
             image: '',
             name: '',
            location: '',
            description: '', 
        },
       
    }

    componentDidMount() {
        //this.getAllProjects()
    }
 
    // getAllProjects = async () => {
    //     try {
    //         const res = await axios.get('/api/projects')
    //         const newState = { ...this.state }
    //         newState.newProject = res.data
    //         this.setState(newState)
    //     } catch (error) {
    //         console.log('failed')
    //         console.log(error)
    //     }
    // }

    onDeleteProject = async (projectId) => {
        await axios.delete(`/api/projects/${projectId}`)
        this.getAllProjects()
    }

    onChangeProject = (evt) => {
        const newState = { ...this.state }
        newState.newProject[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post('/api/projects', this.state.newProject)
            // this.getAllBooks()
             console.log(this.state.newProject)
        } catch (error) {
            console.log('Failed to create project')
            console.log(error)
        }
    }



    render() {
        return (
            <div>
                <h1>Create projects</h1>

                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="image">Image</label>
                        <input
                            type="text"
                            name="image"
                            value={this.state.newProject.image}
                            onChange={this.onChangeProject}
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.newProject.name}
                            onChange={this.onChangeProject}
                        />
                    </div>

                    <div>
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={this.state.newProject.location}
                            onChange={this.onChangeProject}
                        />
                    </div>

                    <div>
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            name="description"
                            value={this.state.newProject.description}
                            onChange={this.onChangeProject}
                        />
                    </div>
                    <input type="submit" value="Add Project" />
                </form>
              
            </div>
        )
    }
}
