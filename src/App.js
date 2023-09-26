import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4e1ab24965d5dd41d94b317adb7e7670`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  return (
    <div className="app">
      <div class="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter the location'
        type="text"
        />

      </div>
      <div className='container'> 
        <div class="top">
          <div class="location">
            <p>Chennai</p>
          </div>
          <div class="temp">
            <h1>37°C</h1>
          </div>
          <div class="description">
            <p>Clouds</p>
          </div>
        </div>
        <div class="bottom">
          <div class="feels">
            <p>40°C</p>
            <p class='bold'> Feels Like</p>
          </div>
          <div class="humidity">
            <p>50%</p>
            <p class='bold'>Humidity</p>
          </div>
          <div class="wind">
            <p>12mph</p>
            <p class='bold'>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;