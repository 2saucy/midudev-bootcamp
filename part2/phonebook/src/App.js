import './App.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import Persons from './Components/Persons';

function App() {

  const [persons, setNewPersons] = useState([]) ;
  const [filter, setNewFilter] = useState('')
  
  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((res) => {
        const {data} = res;
        setNewPersons(data)
      })
  }, [])

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
