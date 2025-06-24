import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchForecast, fetchWeathers } from '../features/weatherSlice'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
// Swiper
import Grid from '@mui/material/Grid'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { Wrap } from '../styles/StyledComponent'
import NotFound from './NotFound'
import Header from '../components/header'
import Footer from '../components/Footer'
import StarCursorEffect from './StarCursorEffect'
import { addBookmark, removeBookmark } from '../features/bookmarkSlice'
import '../components/css/Details.css'

function Details() {
   const { city } = useParams()
   const dispatch = useDispatch()

   const { weathers, forecast, loading, error } = useSelector((state) => state.weathers)
   useEffect(() => {
      dispatch(fetchWeathers(city))
      dispatch(fetchForecast(city))
   }, [dispatch, city])
   const bookmarks = useSelector((state) => state.bookmarks)
   const isBookmarked = bookmarks.some((data) => data.name === weathers?.name)
   const toggleBookmark = () => {
      const cityData = {
         name: weathers.name,
         temp: weathers.main.temp,
         icon: weathers.weather[0].icon,
      }
      if (isBookmarked) dispatch(removeBookmark(weathers.name))
      else dispatch(addBookmark(cityData))
   }

   if (loading) return <p>로딩 중...</p>
   if (error) return <NotFound error={error} />
   return (
      <Wrap>
         <StarCursorEffect />

         <Header title={weathers?.name} />
         <Grid container sx={{ maxWidth: '1200px', height: '30vh', margin: '0 auto' }} columns={12} spacing={2} justifyContent="center" alignItems="center">
            <Grid sx={{ gridColumn: 'span 1' }}></Grid>
            <Grid sx={5}>
               <img src={`https://openweathermap.org/img/wn/${weathers?.weather[0]?.icon}@4x.png`} alt={weathers?.weather[0].description} />
            </Grid>
            <Grid sx={5}>
               <h1>{weathers?.name}</h1>
               <h2>{weathers?.sys?.country}</h2>
               <p>
                  Low temp: {weathers?.main?.temp_min} °C
                  <br />
                  High temp: {weathers?.main?.temp_max} °C
               </p>
            </Grid>
            <Grid sx={1}>
               <button onClick={toggleBookmark}>
                  <BookmarkIcon className="bookmarkIcon" style={{ fontSize: '30px', color: isBookmarked ? 'pink' : 'black' }} />
               </button>
            </Grid>
         </Grid>
         <div style={{ height: '40vh' }}>
            <Swiper
               slidesPerView={5}
               scrollbar={{
                  hide: false,
               }}
               pagination={{
                  type: 'fraction',
               }}
               navigation={true}
               modules={[Pagination, Navigation]}
               className="mySwiper"
            >
               {forecast?.map((data) => {
                  const date = data.dt_txt.split(' ')[0]
                  const time = data.dt_txt.split(' ')[1].slice(0, 5)
                  return (
                     <SwiperSlide key={data.dt}>
                        <div style={{ padding: '100px' }}>
                           <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather.description} />
                           <p>
                              {date}, {time}
                              <br />
                              humidity: {data.main.humidity}%
                           </p>
                        </div>
                     </SwiperSlide>
                  )
               })}
            </Swiper>
         </div>
         <Footer />
      </Wrap>
   )
}

export default Details
