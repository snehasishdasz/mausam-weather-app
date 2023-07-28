import React, { useState } from 'react'
import styled from "styled-components"
import CityComponent from './modules/CityComponent';
import WeatherComponent from './modules/WeatherInfoComponent';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Profile from "./pages/Profile"
import "./App.css"
import { NavLink } from "react-router-dom";
import userImage from "./user-image.jpg"
import axios from "axios";

const API_KEY = "18c668abed36ca13c814a79254e9c9c2"


const Container = styled.div `
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background-color: #63FED9;
  font-family: Montserrat;
`;
const AppLabel = styled.span`
  color: black;
  fontsize:18px;
  font-weight: bold;
`;



const App = () => {
  const [city,updateCity] = useState();
  const [weather,updateWeather] = useState();

  const fetchWeather =async (e) => {
    e.preventDefault();
    const response = 
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    // console.log(response);
    updateWeather(response.data);
  }
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/profile' element={<Profile /> }></Route>
        </Routes>
      </BrowserRouter> */}

      <Container>
          <AppLabel>React Weather App</AppLabel> 
          {weather ? (
              <WeatherComponent weather={weather}/>
          ) : (
          <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />)}
      </Container>
      <footer className="footer" style={{color:"white",}}>
        Created with ❤️ by Snehasish
      </footer>


      {/* <NavLink to="/profile">
      <div className="floating-icon" >
        <img src={userImage} alt="User" className="user-image" />
      </div>
      </NavLink> */}
    </>
      
    
  )
}

export default App