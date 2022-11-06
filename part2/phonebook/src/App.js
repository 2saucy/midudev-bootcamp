import './App.css';
import React, { useEffect, useState } from 'react';
import phonebookService from './services/persons'

// Components
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import Persons from './Components/Persons';



function App() {

  // States
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({
    newName: "",
    newNumber: ""
  });
  const [filter, setNewFilter] = useState('');
  const [error, setError] = useState('');

  // function to clear the newPerson state
  const clearNewPerson = () => {
    setNewPerson({
      newName: "",
      newNumber: ""
    })
  }

  useEffect(() => {
    phonebookService
      .getAll()
      .then(res => {
        const { data } = res
        setPersons(data)
      })
      .catch((error) => {
        console.log(error)
        setError("An error occurred when trying to get all the data from the server.")
      })
  }, [])

  const addPerson = () => {
    const createPerson = {
      name: newPerson.newName,
      number: newPerson.newNumber
    }
    phonebookService
      .create(createPerson)
      .then(res => {
        const { data } = res
        setPersons((prevPersons) => prevPersons.concat(data))
        clearNewPerson()
      })
      .catch((error) => {
        setError("An error occurred when trying to create the person.")
      })
  }

  const deletePerson = (id) => {
    phonebookService
      .deletePer(id)
      .then(res => {
        setPersons(prevPersons => prevPersons.filter((person) => person.id !== id))
      })
      .catch((error) => {
        setError("An error occurred when trying to delete the person")
      })
  }

  const updatePerson = (id, name, number) => {
    const newData = {
      name: name,
      number: number,
      id: id
    }
    phonebookService
      .update(id, newData)
      .then(res => {
        const { data } = res
        const newPersons = persons.map((obj) => {
          if (obj.id === id) {
            return data
          }
          return obj;
        })
        console.log(newPerson)
        clearNewPerson()
      })
      .catch((error) => {
        setError("An error occurred when trying to update the person.")
      })
  }


  return (
    <div className="App">
      <h1> Phone book </h1>
      {error ? <span style={{ color: "red" }}>{error}</span> : ""}
      <hr />
      <h2>Filter</h2>
      <Filter filter={filter} setNewFilter={setNewFilter} />
      <hr />
      <h2>Add a new</h2>
      <PersonForm persons={persons} newPerson={newPerson} setNewPerson={setNewPerson} addPerson={addPerson} updatePerson={updatePerson} />
      <hr />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deletePerson={deletePerson} />
    </div>
  );
}

export default App;
