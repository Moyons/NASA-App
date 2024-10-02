import React, { Component } from "react";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import '../styles/Mars.css';
import { FormControl, MenuItem, Select, InputLabel, ListItemText } from '@mui/material';

class Mars extends Component {

    state = {
        photos: [],
        loading: true,
        collapsed: false,
        selectedOption: "ALL CAMERAS",
        date: dayjs('2024-01-01'),
    }

    fetchPhoto = (date, selectedOption) => {
        if (!date || !dayjs(date).isValid()) return;

        this.setState({ loading: true });
    
        const formattedDate = dayjs(date).format('YYYY-MM-DD');
        let url = `./mars?date=${formattedDate}`;
        if (selectedOption && selectedOption !== "ALL CAMERAS") {
            url += `&camera=${selectedOption}`;
        }

        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({ photos: json.photos, loading: false }))
            .catch(error => {
                console.error("Error fetching photo:", error);
                this.setState({ loading: false });
            });
    }

    componentDidMount() {
        const { date, selectedOption } = this.state;
        this.fetchPhoto(date, selectedOption);
    }

    handleOptionChange = (event) => {
        const { value } = event.target;
        this.setState({ selectedOption: value });
    }

    handleButtonClick = () => {
        const { date, selectedOption } = this.state;
        this.fetchPhoto(date, selectedOption);
    };

    handleDateChange = (newDate) => {
        this.setState({ date: newDate });
    }


    render() {
        const { photos, loading, date, selectedOption } = this.state;

        if (loading) {
            return (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            );
        }

        return (
            <div>
                <h1 style={{marginLeft: "5rem"}}>MARS</h1>
                <div className="container-mars" width="100vh">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateField 
                                className="df-theme-mars" 
                                label="Date Filter"
                                value={date}
                                onChange={this.handleDateChange}
                            />
                    </LocalizationProvider>
                    <FormControl className="combobox-mars" >
                        <InputLabel id="single-select-label">Rover Cameras</InputLabel>
                        <Select
                            labelId="single-select-label"
                            id="single-select"
                            value={selectedOption}
                            onChange={this.handleOptionChange}
                            renderValue={(selected) => selected}
                        >
                            <MenuItem className="menuItem" value="ALL CAMERAS">
                                <ListItemText primary="ALL CAMERAS" />
                            </MenuItem>
                            <MenuItem className="menuItem" value="FHAZ">
                                <ListItemText primary="FHAZ" />
                            </MenuItem>
                            <MenuItem className="menuItem" value="RHAZ">
                                <ListItemText primary="RHAZ" />
                            </MenuItem>
                            <MenuItem className="menuItem" value="MAST">
                                <ListItemText primary="MAST" />
                            </MenuItem>
                            <MenuItem className="menuItem" value="CHEMCAM">
                                <ListItemText primary="CHEMCAM" />
                            </MenuItem>
                            <MenuItem className="menuItem" value="MAHLI">
                                <ListItemText primary="MAHLI" />
                            </MenuItem>
                            <MenuItem className="menuItem" value="MARDI">
                                <ListItemText primary="MARDI" />
                            </MenuItem>
                            <MenuItem className="menuItem" value="NAVCAM">
                                <ListItemText primary="NAVCAM" />
                            </MenuItem>
                            <MenuItem className="menuItem" value="PANCAM">
                                <ListItemText primary="PANCAM" />
                            </MenuItem>
                            <MenuItem className="menuItem" value="MINITES">
                                <ListItemText primary="MINITES" />
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <button 
                        className="submit-button"
                        onClick={this.handleButtonClick}
                    >
                        SEARCH
                    </button>
                </div>
                <div class="containerAllImages">
                    {photos.length > 0 ? (
                        photos.map(photo => (
                                <div className="panel-mars">
                                    <img className="mars-image" src={photo.img_src} alt={photo.id} />
                                </div>
                            ))
                        ) : (
                            <div className="center-text"> 
                                <h2>The server is temporarily unavailable, or no results match the search criteria.</h2>
                            </div>
                        )}
                </div>
                
            </div>
        );
    }
    
}

export default Mars;