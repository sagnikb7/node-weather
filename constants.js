const API_KEY = 'dcb63b84337b4ab0864105429210907';

const getWeatherURL = (city) => {
    return `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
}

module.exports = {getWeatherURL}