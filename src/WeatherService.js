const API_KEY = "18c668abed36ca13c814a79254e9c9c2"

const getFormatedWeatherData = async (city, units="metric") => {
    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

    const data = await fetch (URL)
    .then((res) => res.json())
    .then ((data) => data);

    console.log(data)
};

export {getFormatedWeatherData}