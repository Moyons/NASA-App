import React, { Component } from "react";
import '../styles/PodFilter.css';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

const generateRandomDate = () => {
    const start = new Date(2000, 0, 1); 
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return dayjs(randomDate).format('YYYY-MM-DD'); 
}

const apiUrl = process.env.REACT_APP_API_URL;

class PodFilter extends Component{

    state = {
        photo: null,
        loading: true,
        collapsed: false,
        date: dayjs(generateRandomDate()),
    }

    fetchPhoto = (date) => {
        if (!date || !dayjs(date).isValid()) return;

        this.setState({ loading: true });

        fetch(`${apiUrl}/apodDate?date=${dayjs(date).format('YYYY-MM-DD')}`)
            .then(response => response.json())
            .then(json => this.setState({ photo: json, loading: false }))
            .catch(error => {
                console.error("Error fetching photo:", error);
                this.setState({ loading: false });
            });
    }

    componentDidMount() {
        const { date } = this.state;
        this.fetchPhoto(date);
    }

    handleDateChange = (newValue) => {
        const validDate = dayjs(newValue);

        if (validDate.isValid()) {
            
            if (this.state.delayTimeout) {
                clearTimeout(this.state.delayTimeout);
            }

            const newTimeout = setTimeout(() => {
                this.setState({ date: validDate }, () => {
                    this.fetchPhoto(validDate); 
                });
            }, 1500);

            this.setState({ delayTimeout: newTimeout });
        }
    }

    handleSidebarToggle = (collapsed) => {
        this.setState({ collapsed });
    }

    render() { 
        const { photo, loading, date } = this.state;

        if (loading) {
            return (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            );
        }

        return (
            <div>
                <h1 style={{marginLeft: "5rem"}}>POD FILTER</h1>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateField 
                            className="df-theme" 
                            label="Date Filter"
                            value={date}
                            onChange={this.handleDateChange}
                        />
                </LocalizationProvider>
                {photo ? (
                    <div>
                        <div className="panel">
                            <h2 className="title"> {photo.title} </h2> 
                            <img className="pod-image" src={photo.url} alt={photo.url} />
                        </div>
                        <div className="panel-desc">
                            <p className="description">{photo.explanation}</p>
                        </div>
                    </div>
                ) : (
                    <div className="center-text"> 
                        <h2>Server is temporarily unavailable or undergoing maintenance. Please contact the administrator for assistance.</h2>
                    </div>
                )}
            </div>     
        );
    }
    
}

export default PodFilter;