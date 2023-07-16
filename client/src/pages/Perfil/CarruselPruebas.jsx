// import Swiper core and required modules
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addUserProducts, getProducts } from '../../features/productsSlice/productSlice'
import Loading from '../../components/Loading'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import CardPrueba from './CardPrueba'

const CarrouselPruebas = ({ filtroPor, titulo }) => {
  const loading = useSelector((state) => state?.productsDb?.loading)
  const userProducts = useSelector((state) => state?.productsDb?.userProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
      .then((resp) => {
        const final = resp.payload.filter(producto => producto.owner === filtroPor)
        // console.log('traemos unsando get -> ', resp.payload)
        // console.log('traemos filtrado por usuario -> ', final)
        dispatch(addUserProducts(final))
      })
  }, [dispatch, filtroPor])

  console.log('lista de productos desde swipper', userProducts)

  return (
    <>
      {
      loading
        ? (
          <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '350px' }}>
            <Loading />
          </div>
          )
        : (
            userProducts.length > 0

              ? (
                <>
                  <h2 className='text-left' style={{ width: '100%' }}>
                    Publicaciónes de {titulo}
                  </h2>
                  <Swiper
                     // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{ delay: 5000 }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{ width: '100%', height: '400px', margin: '0 auto' }}
                  >
                    {
                      userProducts.map((producto, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <CardPrueba element={producto} />
                          </SwiperSlide>
                        )
                      })
                    }
                    ...
                  </Swiper>
                </>
                )
              : (
                <p>No se encontraron productos del usuario.</p>
                )
          )
    }

    </>
  )
}

export default CarrouselPruebas
