import React from "react";
import { useState } from "react";
import SearchCity from "./SearchCity";

export default function FindWeather() {
  const API_KEY = "f07386fdaed16171430dc98f1eacd842";
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setWeatherData(data);
        console.log("Weather Data:", data);
      } else {
        console.error("Failed to fetch weather data");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const iconSrc = `icons/${weatherData.weather[0].icon}.svg`;

  return (
    <div>
      <h1>Weather Forecasting</h1>
      <SearchCity onSearch={handleSearch} />
      <br/>
      {weatherData && (
        <div>
          <br/>
          <h2>Weather Information for {weatherData.name}</h2>
          <p>Temperature : {Math.floor(weatherData.main.temp - 273)}°C</p>
          <p>Humidity : {weatherData.main.humidity}%</p>
          <p>UV Index : {weatherData.wind.speed} </p>
          <img
                alt="weather"
                className="icon"
                width={200}
                height={200}
                src={iconSrc}
              ></img>
        </div>
      )}
    </div>
  );
};
