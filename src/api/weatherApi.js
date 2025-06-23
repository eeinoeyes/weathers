import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const API_KEY = import.meta.env.VITE_WEATHER_KEY
/*
https://api.openweathermap.org/data/2.5/weather?q=seoul

api.openweathermap.org/data/2.5/forecast?q=seoul


https://openweathermap.org/img/wn/{weather.icon}.png

key
55279019c2be36b52a8a0c2de79ee21d

query
&units=metric&lang=kr
*/

const weatherApi = axios.create({
   baseURL: BASE_URL,
   params: {
      appid: API_KEY,
      units: 'metric',
      lang: 'kr',
   },
})

export const getWeather = async (city) => {
   const response = await weatherApi.get('/weather', { params: { q: city } })
   return response
}
export const getForecast = async (city) => {
   const response = await weatherApi.get('/forecast', {
      params: { q: city },
   })
   return response
}

export default weatherApi
