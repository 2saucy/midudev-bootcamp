import React from "react";

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
        alert(`${newPerson} already has that ${newNumber}`)
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
    <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input onChange={handleChangeName} value={newName}></input>
      <p>Number</p>
      <input onChange={handleChangeNumber} value={newNumber}></input>
      <p>Click the button to add</p>
      <button>Submit</button>
    </form>
  )
}

export default PersonForm