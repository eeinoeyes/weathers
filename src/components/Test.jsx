import { useEffect } from 'react'
import { getWeather, getForecast } from '../api/weatherApi'

function WeatherTest() {
   useEffect(() => {
      const fetchData = async () => {
         const weather = await getWeather('incheon')
         const forecast = await getForecast('Seoul')

         console.log('🌤️ 현재 날씨:', weather.data)
         console.log('📅 예보:', forecast.data)
      }

      fetchData()
   }, [])

   return <div>날씨 테스트</div>
}

export default WeatherTest
