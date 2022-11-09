import React from 'react'
import Button from './Button'
import '../styles/Persons.css'

const Persons = ({ persons, filter, deletePerson }) => {
  return (
    <div className='phonebook-container'>
      {
        persons
          .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
          .map(({ id, name, number }) => (
            <div className='person-data' key={id}>
              <p>Name: {name}</p>
              <p>Number: {number}</p>
              <Button name={name} id={id} deletePerson={deletePerson} />
            </div>
          ))
      }
    </div>
  )
}

export default Persons
