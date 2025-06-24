import { useSelector } from 'react-redux'

import { Container, Wrap } from '../styles/StyledComponent'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
//swiper

import Header from '../components/header'
import StarCursorEffect from './StarCursorEffect'
import '../components/css/Bookmarks.css'

function Bookmarks() {
   const bookmarks = useSelector((state) => state.bookmarks)
   const title = 'Bookmark'
   console.log(bookmarks)
   return (
      <Wrap>
         <StarCursorEffect />
         <Header title={title} />
         <Container>
            {bookmarks.length === 0 ? (
               <p>북마크에 저장된 데이터가 없습니다.</p>
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
                        <img src={`https://openweathermap.org/img/wn/${data.icon}@4x.png`} style={{ width: '200px', height: '200px' }} />
                        <h2>{data.name}</h2>
                        <h1>{data.temp} °C</h1>
                     </SwiperSlide>
                  ))}
               </Swiper>
            )}
         </Container>
      </Wrap>
   )
}

export default Bookmarks
