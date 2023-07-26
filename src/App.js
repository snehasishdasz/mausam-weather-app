import { useEffect } from "react";
import hotBg from "./assests/1s.jpg"
import coldBg from "./assests/1w.jpg"
import Description from "./components/Description";
import { getFormatedWeatherData } from "./WeatherService";


function App() {

  useEffect(()=>{

    const fetchWeatherData = async ()=>{
      const data = await getFormatedWeatherData('paris');
      console.log(data);
    };
    fetchWeatherData();
  },[]);




  return (
    <div className="App" style={{backgroundImage: `url(${coldBg})`}}>
    <div className="overlay">
      <div className="container">
        <div className="section section__inputs">
          <input type="text" name="city" placeholder="Enter City..."/>
          <button>°F</button>
        </div>

        <div className="section section__temprature ">
          <div className="icon">
            <h3>London GB</h3>
            <img src="https://cdn-icons-png.flaticon.com/128/2698/2698250.png" alt="weather icon" />
            <h3>Cloudy</h3>
          </div>
          <div className="temprature">
            <h1>34 °C</h1>
          </div>
        </div>
        <Description/>
      </div>
    </div>
      
    </div>
  );
}

export default App;
