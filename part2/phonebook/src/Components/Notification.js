import React from "react";
import "../styles/Notification.css"

const Notification = ({ message, value }) => {

    if (value === 1){
        return  <span className="success-notification">{message}</span>
    }
    else if (value === 0){
        return <span className="error-notification">{message}</span>
    }
    else {
        return null
    }
    
}

export default Notification