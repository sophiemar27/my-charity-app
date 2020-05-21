import React, { Component } from 'react'
import { link } from 'react-router-dom'
import axios from 'axios'

    // image: String,
    // name: String,
    // location:String,
    // description: String 
export default class AllProjects extends Component {
    state = {
        projects: {
             image: '',
             name: '',
            location: '',
            description: '', 
        },
        AllProjects: []
    }
    render() {
        return (
            <div>
                <form></form>
            </div>
        )
    }
}
