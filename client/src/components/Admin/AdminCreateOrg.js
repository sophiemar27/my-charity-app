import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class CreateOrganization extends Component {
    state = {
        newOrganization: {
            name: '',
            description: '',
            phoneNumber: '',
            emailAddress: '', 
        },
       
    }

    componentDidMount() {
        //this.getAllOrganizations()
    }
 
    // getAllOrganizations = async () => {
    //     try {
    //         const res = await axios.get('/api/organizations')
    //         const newState = { ...this.state }
    //         newState.newOrganization = res.data
    //         this.setState(newState)
    //     } catch (error) {
    //         console.log('failed')
    //         console.log(error)
    //     }
    // }

    onDeleteOrganization = async (organizationId) => {
        await axios.delete(`/api/organizations/${organizationId}`)
        this.getAllOrganizations()
    }

    onChangeOrganization = (evt) => {
        const newState = { ...this.state }
        newState.newOrganization[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post('/api/organizations', this.state.newOrganization)
            // this.getAllBooks()
             console.log(this.state.newOrganization)
        } catch (error) {
            console.log('Failed to create organization')
            console.log(error)
        }
        const newState = {...this.state}
        newState.newOrganization.name = ''
        newState.newOrganization.description = ''
        newState.newOrganization.phoneNumber = ''
        newState.newOrganization.emailAddress = ''
        this.setState(newState)
    }



    render() {
        return (
            <div>
                <h1>Create organizations</h1>

                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="name">Organization</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.newOrganization.name}
                            onChange={this.onChangeOrganization}
                        />
                    </div>

                    <div>
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            name="description"
                            value={this.state.newOrganization.description}
                            onChange={this.onChangeOrganization}
                        />
                    </div>

                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={this.state.newOrganization.phoneNumber}
                            onChange={this.onChangeOrganization}
                        />
                    </div>

                    <div>
                        <label htmlFor="emailAddress">Email</label>
                        <input
                            type="email"
                            name="emailAddress"
                            value={this.state.newOrganization.emailAddress}
                            onChange={this.onChangeOrganization}
                        />
                    </div>
                    <input type="submit" value="Add Organization" />
                </form>
              
            </div>
        )
    }
}
