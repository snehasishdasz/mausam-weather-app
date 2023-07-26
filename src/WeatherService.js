const API_KEY = "18c668abed36ca13c814a79254e9c9c2"

const makeIconURL = (iconID) => `https://cdn-icons-png.flaticon.com/128/2698/${iconID}.png`

const getFormatedWeatherData = async (city, units="metric") => {
    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

    const data = await fetch (URL)
    .then((res) => res.json())
    .then ((data) => data);

    const {
        weather,
        main:{temp , feels_like, temp_min, temp_max, pressure, humidity},
        wind:{speed},
        sys: {country},
        name,
    } = data;

    const {description, icon} = weather[0];

    return{
        description,
        iconURL: makeIconURL(icon),
        temp,
        feels_like, 
        temp_min, 
        temp_max, 
        pressure, 
        humidity,
        speed,
        country,
    };
};

export {getFormatedWeatherData};