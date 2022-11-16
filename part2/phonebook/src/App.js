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
  const [filter, setNewFilter] = useState('')
  const [newPerson, setNewPerson] = useState({
    newName: '',
    newNumber: ''
  })
  const [notification, setNotification] = useState({
    message: '',
    error: false
  })

  const clearNewPerson = () => {
    setNewPerson({
      newName: '',
      newNumber: ''
    })
  }

  const clearNotification = () => {
    setTimeout(() => {
      setNotification({
        message: '',
        error: false
      })
    }, 5000)
  }

  useEffect(() => {
    phonebookService
      .getAll()
      .then(res => {
        const { data } = res
        setPersons(data)
      })
      .catch((err) => {
        const message = err.response.data.message
        setNotification({
          message: message,
          error: true
        })
      })
      clearNotification()
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
        setNotification({
          message: 'The person has been added to the phone book successfully',
          error: false
        })
      })
      .catch((err) => {
        const message = err.response.data.message
        setNotification({
          message: message,
          error: true
        })
      })
      clearNewPerson()
      clearNotification()
  }

  const deletePerson = (id) => {
    phonebookService
      .deletePer(id)
      .then(res => {
        setPersons(prevPersons => prevPersons.filter((person) => person.id !== id))
        setNotification({
          message: 'The person has been deleted from the phone book successfully',
          error: false
        })
      })
      .catch((err) => {
        console.log(err)
        const message = err.response.data.message
        setNotification({
          message: message,
          error: true
        })
      })
      clearNotification()
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
        setNotification({
          message: 'The person has been updated successfully',
          error: false
        })
      })
      .catch((err) => {
        const message = err.response.data.message
        setNotification({
          message: message,
          error: true
        })
      })
      clearNewPerson()
      clearNotification()
  }

  return (
    <div className='App'>
      <h1> Phone book </h1>
      <Notification notification={notification} />
      <Filter filter={filter} setNewFilter={setNewFilter} />
      <PersonForm persons={persons} newPerson={newPerson} setNewPerson={setNewPerson} addPerson={addPerson} updatePerson={updatePerson} />
      <Persons persons={persons} filter={filter} deletePerson={deletePerson} />
    </div>
  )
}

export default App
