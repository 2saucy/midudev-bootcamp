import React from "react";

const Button = ({ name, id, deletePerson }) => {

  const handleClick = (event) => {
    if (window.confirm(`You really want to delete ${name} from the phonebook?`)) {
      deletePerson(id)
    }
  }

  return <button onClick={() => { handleClick() }}>Delete</button>
}

export default Button