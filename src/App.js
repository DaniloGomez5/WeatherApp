import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/Searchbar.jsx";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const search = async (city) => {
    const weatherResult = await axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=492fc6a1c14fdf6bdd3130c7e1d7bfa9&lang=es`
    );
    setWeatherData(weatherResult.data);

    const forecastResult = await axios(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=492fc6a1c14fdf6bdd3130c7e1d7bfa9&lang=es`
    );

    const dailyData = forecastResult.data.list.filter((reading, index) => index % 8 === 0);
    setForecastData(dailyData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onSearch={search} />

        {weatherData && (
          <div>
            <h2>{weatherData.name}</h2>
            <h3>{weatherData.weather[0].description}</h3>
            <p>Temperatura: {Math.round(weatherData.main.temp - 273.15)}°C</p>
            <p>
              Sensación térmica:{" "}
              {Math.round(weatherData.main.feels_like - 273.15)}°C
            </p>
            <p>Presión: {weatherData.main.pressure} hPa</p>
            <p>Humedad: {weatherData.main.humidity}%</p>
            <p>Velocidad del viento: {weatherData.wind.speed} m/s</p>
            <p>Dirección del viento: {weatherData.wind.deg}°</p>
            <p>Nubosidad: {weatherData.clouds.all}%</p>
          </div>
        )}

        {Array.isArray(forecastData) && forecastData.map((forecast, index) => (
          <div key={index} className="forecast-day">
            <h4>{forecast.dt_txt.split(" ")[0]}</h4>
            <p>Temperatura: {Math.round(forecast.main.temp - 273.15)}°C</p>
            <p>
              Sensación térmica:{" "}
              {Math.round(forecast.main.feels_like - 273.15)}°C
            </p>
            <p>Presión: {forecast.main.pressure} hPa</p>
            <p>Humedad: {forecast.main.humidity}%</p>
            <p>Descripción del clima: {forecast.weather[0].description}</p>
            <p>Velocidad del viento: {forecast.wind.speed} m/s</p>
            <p>Dirección del viento: {forecast.wind.deg}°</p>
            <p>Nubosidad: {forecast.clouds.all}%</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;