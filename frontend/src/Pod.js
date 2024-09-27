import React, { Component } from "react";
import Photo from "./Photo.js";

class Pod extends Component {

    // Didn't work without this initialization
    state = {
        photo: ''
    }

    componentDidMount() {
        fetch("./apod")
           .then(response => { return response.json() })
           .then(json => { this.setState({ photo: json}) })           
           .then(data => console.log(data)) // do stuff with your parsed data
           .catch(error => console.log(error)) // handle any errors
    }

    render() {
        return (
            <div>
                <h1>NASA's Astronomy Picture of the Day</h1>
                <Photo photo={this.state.photo}/>
            </div>
        )
    }

}

export default Pod;
