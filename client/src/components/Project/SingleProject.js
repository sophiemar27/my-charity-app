import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class SingleProject extends Component {
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

    render() {
        
        return (
            <div className='volunteer-form'>
                <div>
                    <h1>Single Page</h1>
                    <div><img class='single-img' src={this.state.image}/></div>
                    
                    <div>{this.state.name}</div>
                    <div>{this.state.location}</div>
                    <div>{this.state.description}</div>
                    
                <Link to={`/create_volunteer`}>
                    <div><button>Register</button></div>
                </Link>
                
                </div>
                
            </div>
        )
      
    }
}
