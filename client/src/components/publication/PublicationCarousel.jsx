import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './styles/publicationCarousel.css'

function PublicationCarousel ({ data }) {
  return (
    <>
      <div className='swiper-container'>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={8}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          {data.map((image, i) => (
            <SwiperSlide className='swiper-uploaded-image' key={i}>
              <div className='carousel-image'>
                <img src={URL.createObjectURL(image)} alt='product-image' />
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

    </>
  )
}

export default PublicationCarousel
