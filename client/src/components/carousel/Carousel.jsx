import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import CardProduct from '../CardProduct'
import { Pagination } from 'swiper/modules'
import '../carousel/carousel.css'

function Carousel ({ data }) {
  return (
    <>
      <Swiper
        slidesPerView='auto'
        spaceBetween={20}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {data.map((product, i) => (
          <SwiperSlide className='swiper-slide' key={i}>
            <CardProduct props={[product]} className='swiper-card-product' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Carousel
