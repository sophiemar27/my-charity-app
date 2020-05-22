import React, { Component } from 'react'
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
            <div class='single-project'>
                <div>
                    <h1>Single Page</h1>
                    <div><img class='single-img' src={this.state.image}/></div>
                    
                    <div>{this.state.name}</div>
                    <div>{this.state.location}</div>
                    <div>{this.state.description}</div>
                </div>
            </div>
        )
      
    }
}
