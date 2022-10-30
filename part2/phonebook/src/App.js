import './App.css';
import React, {useState} from 'react';
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import Persons from './Components/Persons';

function App() {

  const [persons, setNewPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) ;

  const [filter, setNewFilter] = useState('')

  return (
    <div className="App">
      <h1> Phone book </h1>
      <hr/>
      <h2>Filter</h2>
      <Filter filter={filter} setNewFilter={setNewFilter}/>
      <hr/>
      <h2>Add a new</h2>
      <PersonForm persons={persons} setNewPersons={setNewPersons} />
      <hr/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  );
}

export default App;
