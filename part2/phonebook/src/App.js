import './App.css'
import React, { useEffect, useState } from 'react'
import phonebookService from './services/persons'

// Components
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import Notification from './Components/Notification'

function App () {
  // States
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({
    newName: '',
    newNumber: ''
  })
  const [filter, setNewFilter] = useState('')
  const [notification, setNotification] = useState([])

  // function to clear the newPerson state
  const clearNewPerson = () => {
    setNewPerson({
      newName: '',
      newNumber: ''
    })
  }
  const clearNotification = () => {
    setTimeout(() => {
      setNotification([])
    }, 5000)
  }

  useEffect(() => {
    phonebookService
      .getAll()
      .then(res => {
        const { data } = res
        setPersons(data)
      })
      .catch((error) => {
        setNotification([`${error}`, 0])
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
        setNotification(['The person has been added to the phone book successfully', 1])
        clearNotification()
        clearNewPerson()
      })
      .catch((error) => {
        setNotification([`${error}`, 0])
        clearNotification()
      })
  }

  const deletePerson = (id) => {
    phonebookService
      .deletePer(id)
      .then(res => {
        setPersons(prevPersons => prevPersons.filter((person) => person.id !== id))
        setNotification(['The person has been deleted from the phone book successfully', 1])
        clearNotification()
      })
      .catch((error) => {
        setNotification([`${error}`, 0])
        clearNotification()
      })
  }

  const updatePerson = (id, name, number) => {
    const newData = {
      name,
      number,
      id
    }
    phonebookService
      .update(id, newData)
      .then(res => {
        const { data } = res
        const newPersons = persons.map((person) => {
          if (person.id === id) {
            return data
          }
          return person
        })
        setPersons(newPersons)
        setNotification(['The person has been updated successfully', 1])
        clearNewPerson()
        clearNotification()
      })
      .catch((error) => {
        setNotification([`${error}`, 0])
        clearNotification()
      })
  }

  return (
    <div className='App'>
      <h1> Phone book </h1>
      <Notification message={notification[0]} value={notification[1]} />
      <Filter filter={filter} setNewFilter={setNewFilter} />
      <PersonForm persons={persons} newPerson={newPerson} setNewPerson={setNewPerson} addPerson={addPerson} updatePerson={updatePerson} />
      <Persons persons={persons} filter={filter} deletePerson={deletePerson} />
    </div>
  )
}

export default App
