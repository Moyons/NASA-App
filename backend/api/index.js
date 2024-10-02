const API_KEY = "vS3mHym9Gskup5Y2Ejdp3eBHUcFY18XKlgGUnBTg";
const express = require("express");
const fetch = require("node-fetch");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => res.json({ message: "Hello from server!" }));

app.get("/apod", async (req, res) => {
    try {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
        const options = { "method": "GET" };
        
        const response = await fetch(url, options)
        .then(res => res.json());
        
        res.json(response);
    } catch (error) {
        console.error('Error fetching APOD: ', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/apodDate", async (req, res) => {
    try {
        const { date } = req.query;

        if (!date) {
            return res.status(400).json({ error: 'Date is required' });
        }

        const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;
        const options = { "method": "GET" };

        const response = await fetch(url, options)
        .then(res => res.json());
    
        res.json(response);
    } catch (error) {
        console.error('Error fetching APOD filter date: ', error);
        res.status(500).send('Internal Server Error');
    } 
});

app.get("/mars", async (req, res) => {
    try {
        const { date, camera } = req.query;

        if (!date) {
            return res.status(400).json({ error: 'Date is required' });
        }

        var url = ``;

        if (camera != null) {
            url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=${API_KEY}`;
        } else {
            url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}`;
        }
        
        const options = { "method": "GET" };

        const response = await fetch(url, options)
        .then(res => res.json());
    
        res.json(response);
    } catch (error) {
        console.error('Error fetching Mars pictures: ', error);
        res.status(500).send('Internal Server Error');
    } 
});

// Only start the server if this file is run directly
if (require.main === module) {
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
}

module.exports = app;