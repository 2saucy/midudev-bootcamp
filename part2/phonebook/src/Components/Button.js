import React from "react";
import "../styles/Button.css"

const Button = ({ name, id, deletePerson }) => {

  const handleClick = (event) => {
    if (window.confirm(`You really want to delete ${name} from the phonebook?`)) {
      deletePerson(id)
    }
  }

  return <button className="btn-delete" onClick={() => { handleClick() }}>Delete</button>
}

export default Button