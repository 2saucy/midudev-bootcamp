import React from "react";
import Country from "./Country";
import Button from "./Button";

const Result = ({ countries, filter }) => {

  if (filter) {
    const filterCountries = countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()))

    if (filterCountries.length === 1) {
      return <Country country={filterCountries[0]} />
    }
    else if (filterCountries.length >= 2 && filterCountries.length < 10) {
      return (
        <ul>
          {
            filterCountries.map((country) => (
              <li key={country.name}> {country.name} <Button country={country}/></li>
            ))
          }
        </ul>
      )
    }
    else if (filterCountries.length === 0) {
      return <p>No result. Try another country.</p>
    }
    else {
      return <p>Too many results</p>
    }
  }
  else {
    return <p>Please type the country you looking for ^^</p>
  }

}

export default Result