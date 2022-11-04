import React from "react";

const Weather = ({weather}) => {
    return (
        <div className="weather-container">
            <h2>Weather</h2>
            <img className="weather-img" src={weather.weather_icons} alt={weather.weather_descriptions} />
            <div className="weather-data">
                <p>Description: {weather.weather_descriptions}</p>
                <p>Temperature: {weather.temperature}</p>
                <p>Sensacion termica: {weather.feelslike}</p>
                <p>Humedad: {weather.humidity}</p>
                <p>Presion: {weather.pressure}</p>
            </div>
        </div>
    )
}

export default Weather