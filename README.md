<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h2 align="center">Ivan Moyons - Bounce Insights Challenge</h2>

  <p align="center">
    This README contains all the information you need to set up, start, and use this web application.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
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
        <li><a href="#use-case">Use Case</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is a web application that utilizes NASA's APIs (https://api.nasa.gov/) to showcase space-related data. It features a React frontend that communicates with a Node.js backend running Express. The web application is deployed on Vercel.

NASA's APIs offer a wide range of endpoints, allowing users to explore and interact with various space data. Some of the endpoints included are:

* Astronomy Picture of the Day (APOD)
* Mars Rover Photos
* Earth Polychromatic Imaging Camera (EPIC)
* NASA Image and Video Library

In this project, we specifically utilize the APOD and Mars photos with filters.


### Built With

The primary frameworks, libraries and tools used in this project are:

* React
* Node.js
* Express
* Vercel

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Navigate to the local path where you want to store the cloned repository.
  ```sh
  cd C:\your_local_path
  ```

### Installation

1. Get a free API Key at https://api.nasa.gov/.
2. Clone the repo
   ```sh
   git clone https://github.com/Moyons/Bounce-Insights-Chall.git
   ```
3. Go to the frontend folder and install npm
   ```sh
   cd .\Bounce-Insights-Chall\frontend\
   npm install
   ```   
4. Enter your API in `backend .env` file
   ```.env
   API_KEY = ENTER_YOUR_API
   ```

### Start

1. Open a new terminal and go the backend folder
   ```sh
   cd .\Bounce-Insights-Chall\backend\
   ```
2. Launch the server
   ```sh
   $\backend> npm start
   ```
3. In the terminal with the frontend folder alreyed open, launch the client
   ```sh
   $\frontend> npm start
   ```
4. The web application will open in the browser in the http://localhost:3000 url.
5. The server will be launched in http://localhost:3001.

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

### Test

### Use Case



## By doing the next steps you can push the changes to GitHub

1. git add .
2. git commit -m "comment"
3. git push origin master

## api/index.js is the important file which answers when the client sends a get method

## By doing the next steps you can pull the changes from GitHub to local

1. git fetch origin
2. git pull origin master
