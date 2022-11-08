import React from "react";
import "../styles/PersonForm.css"

const PersonForm = ({ persons, newPerson, setNewPerson, addPerson, updatePerson }) => {

  const { newName, newNumber } = newPerson

  const handleChangeName = (event) => {
    setNewPerson({
      ...newPerson,
      newName: event.target.value
    });
  }

  const handleChangeNumber = (event) => {
    setNewPerson({
      ...newPerson,
      newNumber: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const exist = persons.find(({ name }) => name.toLowerCase() === newName.toLowerCase())

    if (exist) {
      if (exist.number !== newNumber) {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)) {
          updatePerson(exist.id, exist.name, newNumber)
        }
        else {
          setNewPerson({
            ...newPerson,
            newNumber: ""
          })
        }
      }
      else {
        alert(`${exist.name} already has that number (${newNumber})`)
        setNewPerson({
          ...newPerson,
          newNumber: ""
        })
      }
    }
    else {
      addPerson()
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-name">
          <p>Name</p>
          <input className="form-input" onChange={handleChangeName} value={newName}></input>
        </div>
        <div className="form-number">
          <p>Number</p>
          <input className="form-input" onChange={handleChangeNumber} value={newNumber}></input>
        </div>
        <p>Click the button to add</p>
        <button className="btn-submit">Submit</button>
      </form>
    </div>
  )
}

export default PersonForm