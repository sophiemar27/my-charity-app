import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class CreateVolunteer extends Component {
    state = {
        newVolunteer: {
             name: '',
             projectName: '',
             phoneNumber: '',
             emailAddress: '', 
        },
       
    }

    componentDidMount() {
        //this.getAllVolunteers()
    }
 
    // getAllVolunteers = async () => {
    //     try {
    //         const res = await axios.get('/api/volunteers')
    //         const newState = { ...this.state }
    //         newState.newVolunteer = res.data
    //         this.setState(newState)
    //     } catch (error) {
    //         console.log('failed')
    //         console.log(error)
    //     }
    // }

    // onDeleteVolunteer = async (volunteerId) => {
    //     await axios.delete(`/api/volunteers/${volunteerId}`)
    //     this.getAllVolunteers()
    // }

    onChangeVolunteer = (evt) => {
        const newState = { ...this.state }
        newState.newVolunteer[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post('/api/volunteers', this.state.newVolunteer)
            
             console.log(this.state.newVolunteer)
        } catch (error) {
            console.log('Failed to create volunteer')
            console.log(error)
        }
        const newState = {...this.state}
        newState.newVolunteer.name = ''
        newState.newVolunteer.projectName = ''
        newState.newVolunteer.phoneNumber = ''
        newState.newVolunteer.emailAddress = ''
        this.setState(newState)
    }



    render() {
        return (
            <div>
                <h1></h1>

                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="name"></label>
                        <input
                            placeholder="Full Name"
                            type="text"
                            name="name"
                            value={this.state.newVolunteer.name}
                            onChange={this.onChangeVolunteer}
                        />
                    </div>

                    <div>
                        <label htmlFor="projectName"></label>
                        <input
                            placeholder="Project Name"
                            type="text"
                            name="projectName"
                            value={this.state.newVolunteer.projectName}
                            onChange={this.onChangeVolunteer}
                        />
                    </div>

                    <div>
                        <label htmlFor="phoneNumber"></label>
                        <input
                            placeholder="Phone Number"
                            type="text"
                            name="phoneNumber"
                            value={this.state.newVolunteer.phoneNumber}
                            onChange={this.onChangeVolunteer}
                        />
                    </div>

                    <div>
                        <label htmlFor="emailAddress"></label>
                        <input
                            placeholder="Email Address"
                            type="text"
                            name="emailAddress"
                            value={this.state.newVolunteer.emailAddress}
                            onChange={this.onChangeVolunteer}
                        />
                    </div>
                    <Link to={`/Confirmation`}>
                        <input type="submit" value="Add Volunteer"/>
                    </Link>
                    
                </form>
              
            </div>
        )
    }
}
