<br />
<div align="center">
  <h2 align="center">Ivan Moyons - NASA App</h2>

  <p align="center">
    This README provides all the necessary information to set up, start, and use this web application.
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#start">Start</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#test">Testing</a></li>
        <li><a href="#production">Production</a></li>
        <li><a href="#use-cases">Use Cases</a></li>
        <li><a href="#server-downtime">Server Downtime</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

This project is a web application that utilizes NASA's API (https://api.nasa.gov/) to showcase space-related data. It features a React frontend that communicates with a Node.js backend running Express. The web application is deployed on Vercel.

NASA's API offers a wide range of endpoints, allowing users to explore and interact with various space data. Some of these endpoints are:

* Astronomy Picture of the Day (APOD)
* Mars Rover Photos
* Earth Polychromatic Imaging Camera (EPIC)
* NASA Image and Video Library

For this project, we specifically use the APOD and Mars Rover Photos, applying filters to enhance the user experience.

**Note:** "POD" refers to the Picture of the Day.


### Built With

The primary frameworks, libraries and tools used in this project are:

* React
* Node.js
* Express
* Vercel

## Getting Started

### Prerequisites

Navigate to the local path where you want to store the cloned repository
  ```sh
  cd C:\your_local_path
  ```

### Installation

1. Get a free API key at https://api.nasa.gov/.
2. Clone the repository
   ```sh
   git clone https://github.com/Moyons/Bounce-Insights-Chall.git
   ```
3. Navigate to the frontend folder and install npm packages
   ```sh
   cd .\Bounce-Insights-Chall\frontend\
   npm install
   ```   
4. Enter your API key in `backend .env` file
   ```.env
   API_KEY = ENTER_YOUR_API
   ```

### Start

1. Open a new terminal and navigate to the backend folder
   ```sh
   cd .\Bounce-Insights-Chall\backend\
   ```
2. Start the server
   ```sh
   $\backend> npm start
   ```
3. In the terminal where the frontend folder alreyed open, start the client
   ```sh
   $\frontend> npm start
   ```
4. The web application will open in your browser at http://localhost:3000 url.
5. The server will run at http://localhost:3001.

## Usage

### Test

1. In your terminal, navigate to the backend folder.
2. If the server is running, stop it by pressing Ctrl + C.
3. Run the following command to start the tests:
   ```sh
   $\backend> npm test
   ```
This will initiate a test using "jest," sending requests to the server. All requests should return a 200 OK status (successful request).

### Production

The web application was deployed with vercel and can be accessed at https://bounce-insights-chall-front.vercel.app/.

### Use Cases

The application is divided in 3 different menus:

* <b>Picture of the day</b>

This section displays NASA's Astronomy Picture of the Day (APOD), showing today's picture along with a description.

* <b>Filter POD</b>

This section shows a random NASA Picture of the Day, with an option to filter by a specific date.

* <b>Mars Photos</b>

This section allows users to view Mars Rover photos for a specified date. By default, the date is set to January 1, 2024, showing photos from all available cameras. Users can filter the photos by date and camera.

### Server downtime

If the server experiences issues, no results will be displayed in any section. The "Picture of the Day" section will show a loading indicator, while other sections will display a message indicating that the server is down.
