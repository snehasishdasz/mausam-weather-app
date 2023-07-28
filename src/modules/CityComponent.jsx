import React from 'react'
import styled from "styled-components"


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
        <WeatherLogo src="/icons/perfect-day.svg" />
        <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input type="text" placeholder='City' onChange={(e)=>updateCity(e.target.value)} />
            <button type='submit'>Search</button>
        </SearchBox>

        
    </>
  )
}

export default CityComponent