import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=4e1ab24965d5dd41d94b317adb7e7670`;

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
            <p>{data.name}</p>
          </div>
          <div class="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div class="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined &&
          <div class="bottom">
            <div class="feels">
              {data.main ? <p class='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p class='bold'> Feels Like</p>
            </div>
            <div class="humidity">
              {data.main ? <p class='bold'> {data.main.humidity}%</p> : null}
              <p class='bold'>Humidity</p>
            </div>
            <div class="wind">
              {data.wind ? <p class='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
              <p class='bold'>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;