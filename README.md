## Weather App Front-End
This is the front-end for the weather app, built using React, Tailwind CSS, and TypeScript. The app fetches weather data from a Laravel backend API and displays it in an interactive and responsive interface.

## Features
- Search by City: Users can search for weather information for any city.

- Current Weather: Displays the current weather, including temperature, wind speed, humidity, and weather condition.

- Weather Forecast: Shows a 3-day weather forecast with temperature, weather icons, and descriptions.

- Wind and Humidity: Displays wind speed and direction along with a humidity bar for the selected location.

- Unit Toggle: Allows toggling between Celsius and Fahrenheit for temperature units.

## Technologies Used
-React: JavaScript library for building user interfaces.

-Tailwind CSS: Utility-first CSS framework for fast UI development.

- API Fetching: Fetches weather data from a Laravel backend using fetch API.

- State Management: Uses React hooks (useState, useEffect) to manage and fetch data.


## Installation
To get the project up and running on your local machine, follow these steps:

## Prerequisites
Make sure you have the following installed:

- Node.js: Download Node.js

- npm: npm comes with Node.js.

1. Clone the Repository
git clone git@github.com:ngetichdennis/weatherfrontend.git
cd weatherfrontend
2. Install Dependencies
Run the following command to install the required dependencies:
npm install
3. Set Up Configuration
The app fetches data from a backend API, so you’ll need to configure the base URL for the API in the config.js file.

In the App folder of your project, create a file called config.js with the following content:
const config = {
  baseURL: 'http://127.0.0.1:8000', // Update this with base on your Laravel API URL
};

export default config;
4. Run the App
Once the dependencies are installed and the configuration is set up, run the app locally:


npm run dev
The app should now be running at http://localhost:3000. Open this URL in your browser to view the weather app.

## Usage
- Search for a City: Type the name of a city in the search bar and hit the "GO" button to fetch weather data for that city.

- Toggle Temperature Units: Use the Celsius and Fahrenheit tabs to switch between different temperature units.

- View Weather Forecast: The weather forecast for the next 3 days is displayed under the search bar.

- View Wind and Humidity: Wind speed, direction, and humidity percentage are shown below the weather forecast.

## Notes
Make sure the backend API is running and accessible at the provided base URL.

The project uses Tailwind CSS for styling. You can customize the look and feel by editing the Tailwind configuration or modifying the components directly.
