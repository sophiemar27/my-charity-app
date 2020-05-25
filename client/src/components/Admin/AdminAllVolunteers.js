import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

     
export default class AdminAllVolunteers extends Component {
    state = {
        volunteers: {
             name: '',
             projectName: '',
            phoneNumber: '',
            emailAddress: '', 
        },
        AllVolunteers: []
    }

    componentDidMount() {
        this.getAllVolunteers()
    }
 
    getAllVolunteers = async () => {
        try {
            const res = await axios.get('/api/volunteers')
            const newState = { ...this.state }
            newState.AllVolunteers = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get all volunteer')
            console.log(error)
        }

    }

    onDeleteVolunteer = async (volunteerId) => {
        await axios.delete(`/api/volunteers/${volunteerId}`)
        this.getAllVolunteers()
    }

    

    render() {
        return (
            <div class='all-volunteers'>
                {this.state.AllVolunteers.map((volunteers, index) => {
                    return (
                        <div key={`jd320kd-${index}`}>
                            <div> Name: {volunteers.name}</div>
                            <Link to={`/admin/volunteers/${volunteers._id}`}>
                            <div>Project Name: {volunteers.projectName}</div>
                            </Link>
                            <div>Phoe Number: {volunteers.phoneNumber}</div>
                            <div>Email: {volunteers.emailAddress}</div>
                            <button onClick={() => this.onDeleteVolunteer(volunteers._id)}>Delete</button> 
                            
                            <button>Edit</button>

                            
                        </div>
                    )
                })}
            </div>
        )
    }
}