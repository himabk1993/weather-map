import React, {useEffect, useState} from 'react';
import './App.css';
import Weather from './Weather' ;

const App = () => {

  const [descriptions, setDescriptions] = useState([]);
  const [temparatures, setTemparatures] = useState({temp: '', pressure: '', humidity: '', temp_min: '', temp_max: ''});
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Stockholm');
  const [message, setMessage] = useState("");
  
  useEffect( () => {
    get_weather();
  }, [query]);
  
  const get_weather = async()  => {
    console.log("search=",search)
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=27e50eca0f3434e5e77a33959ffcb411`);
    const data = await response.json();
    console.log("data = ",data);
    setMessage(data.message);
    console.log("mess = ",data.message);
    console.log("mess... = ",message);
    setTemparatures(data.main);
    console.log("desc = ",data.weather);
    setDescriptions(data.weather);
    console.log("desc ...= ",descriptions);
//    console.log("temparature = ", temparatures)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

 return(
    <div className="main-div">
      <form className="main-form" onSubmit={getSearch}>
        <p>Enter the City :</p>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} required/>
        <button className="search-button">Search</button>
      </form>
      <div className="weather-result">
        <p className="not-found">{message}</p>
        { descriptions && descriptions.map(description => (
          <Weather
          key = {description.id}
          description_det = {description.description}
          temp_det = {temparatures && temparatures.temp}
          description_short = {description.main}
          />
          )
          )}

      </div>

    </div> 
  );

}

export default App;