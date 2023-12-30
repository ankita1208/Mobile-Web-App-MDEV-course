import React, { useState, useEffect } from 'react';
import clearSkyIcon from './assets/clear-sky.png'; // Importing weather icons
import cloudyIcon from './assets/cloudy.png';
import rainyIcon from './assets/rainy.png';
import defaultIcon from './assets/default.png';
import './WeatherPage.css'; // Importing the CSS file for styling

// Functional component named WeatherPage
const WeatherPage = () => {
  // State variable to store weather data received from the API
  const [weatherData, setWeatherData] = useState(null);

  // useEffect hook to fetch weather data based on user's location
  useEffect(() => {
    // Get user's location using Geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords; // Extract latitude and longitude from user's position
        const API_KEY = '6aca78a8e5dab1db64a13af10d6d8f87'; // Replace with your actual API key

        // Fetch weather data from API based on user's location
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
          .then(response => response.json()) // Parse the JSON response from the API
          .then(data => {
            setWeatherData(data); // Update weatherData state variable with fetched data
          })
          .catch(error => {
            console.error('Error fetching weather data:', error); // Log error if fetching data fails
          });
      },
      (error) => {
        console.error('Error getting user location:', error); // Log error if getting user location fails
      }
    );
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  // Function to determine the appropriate weather icon based on weather description
  const getWeatherIcon = (weatherDescription) => {
    const weatherIcons = {
      'Clear': clearSkyIcon,
      'Clouds': cloudyIcon,
      'Rain': rainyIcon,
    };

    return weatherIcons[weatherDescription] || defaultIcon; // Return the appropriate weather icon or default icon
  };

  // Render the component JSX
  return (
    <div className="weather-page"> 
      <h2>Current Weather</h2> 
      {weatherData ? ( 
        <div className="weather-details"> 
          <img src={getWeatherIcon(weatherData.weather[0].main)} alt="Weather Icon" className="weather-icon" /> 
          <p>Location: {weatherData.name}, {weatherData.sys.country}</p> 
          <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p> 
          <p>Weather: {weatherData.weather[0].description}</p> 
        </div>
      ) : (
        <p>Loading weather data...</p> 
      )}
    </div>
  );
};

export default WeatherPage; // Export the WeatherPage component for use in other parts of the application
