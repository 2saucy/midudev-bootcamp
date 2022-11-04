import React, { useState } from "react";
import Country from "./Country";

const Show = ({ country }) => {
    
    const [show, setShow] = useState(false);
    
    const handleClick = () => {
        setShow(!show)
    }

    if (!show){
        return <button onClick={handleClick}>Show</button> 
    }
    else{
        return(
            <div>
                <Country country={country}/>
                <button onClick={handleClick}>Hide</button>
            </div>
        )
    }
}

export default Show