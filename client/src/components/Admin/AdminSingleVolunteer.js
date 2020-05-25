import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AdminSingleVolunteer extends Component {
    state = {
             name: '',
             projectName: '',
            phoneNumber: '',
            emailAddress: '', 
    }

    componentDidMount(){
        this.getSingleVolunteer()
    }


    getSingleVolunteer = async () => {
        const volunteerId = this.props.match.params.volunteerId
        console.log('volunteerId', volunteerId)
        const res = await axios.get(`/api/volunteers/${volunteerId}`)
        this.setState(res.data)
    }

    onDeleteVolunteer = async (volunteerId) => {
        await axios.delete(`/api/volunteers/${volunteerId}`)
        
    }

    

    render() {
        const volunteerId = this.props.match.params.volunteerId
        return (
            <div class='single-volunteer'>
                <div>
                    <h1>Admin Single Volunteer Page</h1>
                    <div>Name: {this.state.name}</div>
                    <div>Project Name: {this.state.projectName}</div>
                    <div>Phone Number: {this.state.phoneNumber}</div>
                    <div>Email: {this.state.emailAddress}</div>
                    <button onClick={() => this.onDeleteVolunteer(volunteerId)}>Delete</button> 
                </div>
            </div>
        )
    }
}