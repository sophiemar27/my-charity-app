import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AdminSingleOrganization extends Component {
    state = {
             name: '',
             description: '',
            phoneNumber: '',
            emailAddress: '', 
    }

    componentDidMount(){
        this.getSingleOrganization()
    }


    getSingleOrganization = async () => {
        const organizationId = this.props.match.params.organizationId
        console.log('organizationId', organizationId)
        const res = await axios.get(`/api/organizations/${organizationId}`)
        this.setState(res.data)
    }

    onDeleteOrganization = async (organizationId) => {
        await axios.delete(`/api/organizations/${organizationId}`)
        
    }

    

    render() {
        const organizationId = this.props.match.params.organizationId
        return (
            <div class='single-organization'>
                <div>
                    <h1>Admin Single Organization Page</h1>
                    <div>{this.state.name}</div>
                    <div>{this.state.description}</div>
                    <div>{this.state.phoneNumber}</div>
                    <div>{this.state.emailAddress}</div>
                    <button onClick={() => this.onDeleteOrganization(organizationId)}>Delete</button> 
                </div>
            </div>
        )
    }
}