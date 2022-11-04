import React from "react";

const Search = ({filter, setFilter}) => {

    const handleChangeSearch = (event) => {
        setFilter(event.target.value)
    }

    return(
        <div className='search'>
            <p>Search countries: </p>
            <input onChange={handleChangeSearch} value={filter}></input>
        </div>
    )
}

export default Search