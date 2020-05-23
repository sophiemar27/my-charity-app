import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

     
export default class AllOrganizations extends Component {
    state = {
        organizations: {
             name: '',
             description: '',
            phoneNumber: '',
            emailAddress: '', 
        },
        AllOrganizations: []
    }

    componentDidMount() {
        this.getAllOrganizations()
    }
 
    getAllOrganizations = async () => {
        try {
            const res = await axios.get('/api/organizations')
            const newState = { ...this.state }
            newState.AllOrganizations = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get all organization')
            console.log(error)
        }

    }

    onDeleteOrganization = async (organizationId) => {
        await axios.delete(`/api/organizations/${organizationId}`)
        this.getAllOrganizations()
    }

    

    render() {
        return (
            <div class='all-organizations'>
                <h1>All Organizations</h1>
                {this.state.AllOrganizations.map((organizations, index) => {
                    return (
                        <div key={`jd320kd-${index}`}>
                            <div> {organizations.name}</div>
                            <Link to={`/organizations/${organizations._id}`}>
                            <div>{organizations.description}</div>
                            </Link>
                            <div>{organizations.phoneNumber}</div>
                            <div>{organizations.emailAddress}</div>
                            <button onClick={() => this.onDeleteOrganization(organizations._id)}>Delete</button> 
                            
                            <button>Edit</button>

                            
                        </div>
                    )
                })}
            </div>
        )
    }
}