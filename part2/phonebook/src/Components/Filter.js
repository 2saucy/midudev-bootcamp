import React from "react";
import "../styles/Filter.css"

const Filter = ({ filter, setNewFilter }) => {

  const handleChangeFilter = (event) => {
    setNewFilter((event.target.value).toLowerCase())
  }

  return (
    <div className="filter-container">
        <p>Write the name of the person: </p>
        <input className="filter-input" onChange={handleChangeFilter} value={filter}></input>
    </div>
  )
}

export default Filter