import React, { Component } from "react";
import '../styles/Pod.css';

const apiUrl = process.env.REACT_APP_API_URL;

class Pod extends Component {

    state = {
        photo: null,
        loading: true,
        collapsed: false,
    }

    componentDidMount() {
        fetch(`${apiUrl}/apod`)
           .then(response => { return response.json() })
           .then(json => { this.setState({ photo: json, loading: false})})
           .catch(error => console.log(error))
    }

    handleSidebarToggle = (collapsed) => {
        this.setState({ collapsed });
    }

    render() {
        const { photo, loading } = this.state;

        if (loading) {
            return (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            );
        }

        return (
            <div>
                <h1 style={{marginLeft: "5rem"}}>PICTURE OF THE DAY</h1>
                {photo && (
                    <div>
                        <div className="panel">
                            <h2 className="title"> {photo.title} </h2> 
                            <img className="pod-image" src={photo.url} alt={photo.url} />
                        </div>
                        <div className="panel-desc">
                            <p className="description">{photo.explanation}</p>
                        </div>
                    </div>
                )}
                               
            </div>
        );
    }
    
}

export default Pod;