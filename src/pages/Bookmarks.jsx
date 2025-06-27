import { useDispatch, useSelector } from 'react-redux'

import { Container, Wrap } from '../styles/StyledComponent'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
//swiper

import Header from '../components/header'
import Footer from '../components/Footer'
import NotFound from './NotFound'
import '../components/css/Bookmarks.css'
import ClearIcon from '@mui/icons-material/Clear'
import { removeBookmark } from '../features/bookmarkSlice'

function Bookmarks() {
   const dispatch = useDispatch()
   const bookmarks = useSelector((state) => state.bookmarks)

   const toggleBookmark = (data) => {
      const isBookmarked = bookmarks.some((bookmark) => bookmark.name === data.name)
      if (isBookmarked) {
         dispatch(removeBookmark(data.name))
      }
   }
   return (
      <Wrap>
         <Header title={'Bookmarks'} />
         <Container>
            {bookmarks.length === 0 ? (
               <NotFound error={'북마크에 저장된 데이터가 없습니다.'} />
            ) : (
               <Swiper
                  direction={'vertical'}
                  pagination={{
                     clickable: true,
                  }}
                  modules={[Pagination]}
                  slidesPerView={4}
                  spaceBetween={40}
                  className="mySwiper bookmark"
                  style={{ height: '800px' }}
               >
                  {bookmarks.map((data) => (
                     <SwiperSlide key={data.name} className="card">
                        <img src={`https://openweathermap.org/img/wn/${data.icon}@4x.png`} style={{ width: '150px', height: '150px' }} />
                        <h2>{data.name}</h2>
                        <h1>{data.temp} °C</h1>
                        <button onClick={() => toggleBookmark(data)} style={{ borderRadius: '50%', padding: '10px' }}>
                           <ClearIcon className="bookmarkIcon" />
                        </button>
                     </SwiperSlide>
                  ))}
               </Swiper>
            )}
         </Container>
         <Footer />
      </Wrap>
   )
}

export default Bookmarks
