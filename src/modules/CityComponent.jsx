import React from 'react'
import styled from "styled-components"
import { NavLink } from "react-router-dom";
import userImage from "../user-image.jpg"

const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
`;
const ChooseCityLabel = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 10px auto;
`;
const SearchBox = styled.form`
     display: flex;
     flex-direction: row;
     border: black solid 1px;
     border-radius:2px;
    color: black;
    font-size: 18px;
    margin: 20px auto;

    & input{
        padding: 10px;
        font-size: 14px;
        border: none;
        font-weight: bold;
        outline: none;
    }
    & button{
        padding: 10px;
        font-size: 14px;
        color: #63FED9;
        background-color: #0A192F;
        border: none;
        cursor: pointer;
        font-weight: bold;
        outline: none;
    }
`;
const CityComponent = (props) => {
    const {updateCity,fetchWeather} = props;
  return (
    <>
        <WeatherLogo src="/icons/day.svg" />
        <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input type="text" placeholder='City' onChange={(e)=>updateCity(e.target.value)} />
            <button type='submit'>Search</button>
        </SearchBox>

        {/* <NavLink to="/profile">
      <div className="floating-icon" >
        <img src={userImage} alt="User" className="user-image" />
      </div>
      </NavLink> */}
        
    </>
  )
}

export default CityComponent