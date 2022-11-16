import React from 'react'
import '../styles/Notification.css'

const Notification = ({ notification }) => {
  const {message, error} = notification
  
  if(error){
    return <span className='error-notification'>{message}</span>
  }
  else{
    return <span className='success-notification'>{message}</span>
  }
}

export default Notification
