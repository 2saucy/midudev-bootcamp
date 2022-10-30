import React from "react";

const Filter = ({filter, setNewFilter}) => {

    const handleChangeFilter = (event) => {
        setNewFilter(event.target.value)
      }
    
    return (
        <div>
            <p>filter shown with</p>
            <input onChange={handleChangeFilter} value={filter}></input>
        </div>
    )
}

export default Filter