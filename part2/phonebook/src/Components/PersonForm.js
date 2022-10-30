import { useState } from "react";
import React from "react";

const PersonForm = ({persons, setNewPersons}) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleChangeName = (event) => {
        setNewName(event.target.value);
    }
    const handleChangeNumber = (event) => {
        setNewNumber(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        const itExists = persons.find(({ name }) => name === newName)
        if (itExists) {
            alert(`${newName} is already in the phonebook.`)
            setNewName("")
        } else {
            const personToAddToState = {
                name: newName,
                number: newNumber
            };
            setNewPersons(persons.concat(personToAddToState));
            setNewName("")
            setNewNumber("")
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