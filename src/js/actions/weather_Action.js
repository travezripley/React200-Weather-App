
const axios = require('axios');

const apiKey = "e4cf742212dcbe7cd70bee9737ad49a8";

export const getWeather = city => {
  return dispatch => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
      .then(data => dispatch({ type: 'GET_WEATHER', payload: data }))
      .catch(err => dispatch({ type: 'GET_WEATHER_FAIL', error: true }))


  }
}