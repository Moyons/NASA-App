// server/api/index.js

const express = require("express");
const fetch = require("node-fetch");
const PORT = process.env.PORT || 3001;
const app = express();

const API_KEY = "vS3mHym9Gskup5Y2Ejdp3eBHUcFY18XKlgGUnBTg";

app.get("/api", (req, res) => res.json({ message: "Hello from server!" }));

app.get("/apod", async (req, res) => {
    console.log("/fecth_image ednpoint called");
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
    const options = {
        "method": "GET",
    };

    const response = await fetch(url, options)
        .then(res => res.json())
        .catch( e => {
            console.error({
                "message": "Oh no",
                error: e,
            });
        });
    
    console.log("REPONSE: ", response);
    res.json(response);
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));