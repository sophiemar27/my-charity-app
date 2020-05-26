import React, { Component } from 'react'
import axios from 'axios'

export default class Confirmation extends Component {
        state = { 
            name: ''
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

    render() {
        return (
            <div>
                <div>Thank You {this.state.name}!</div>
                <div>You Have Successfully Registerd For This Project</div>

            </div>
        )
    }
}
