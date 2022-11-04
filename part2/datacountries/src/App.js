import './App.css';
import { useEffect, useState } from "react"
import axios from 'axios';
import Search from './Components/Search';
import Result from './Components/Result';

function App() {

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");


  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        const { data } = res;
        setCountries(data);
      })
  }, [])

  return (
    <div className="App">
      <Search filter={filter} setFilter={setFilter} />
      <Result countries={countries} filter={filter} />
    </div>
  );
}

export default App;


