import React, { useEffect, useState } from "react"
import axios from "axios"
import Languages from "./Languages"
import Weather from "./Weather"


const Country = ({ country }) => {

  const [weather, setWeather] = useState([])

  useEffect(() => {
    console.log('hello! useEffect'); // Delete later..
    const params = new URLSearchParams({
      access_key: process.env.REACT_APP_API_KEY,
      query: country.capital
    });
    axios
      .get(`http://api.weatherstack.com/current?${params}`)
      .then((res) => {
        const { data } = res;
        console.log(data)
        setWeather(data["current"])
      })
  }, [])

  return (
    <div className="container">
      <div className="country-container">
        <h1>{country.name}</h1>
        <img className="country-img" src={country.flag} alt={country.name}/>
        <div className="country-data">
          <p>Region: {country.region}</p>
          <p>Capital name: {country.capital}</p>
          <p>Population: {country.population}</p>
        </div>
      </div>
      <Languages languages={country.languages} />
      <Weather weather={weather} />
    </div>
  );
}

export default Country