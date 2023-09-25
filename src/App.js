import logo from './logo.svg';

function App() {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=4e1ab24965d5dd41d94b317adb7e7670"

  return (
    <div className="app">
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
