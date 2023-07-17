import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addUserProducts, getProducts } from '../../features/productsSlice/productSlice'
import Loading from '../../components/Loading'
import CardPrueba from './CardPrueba'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './carruselPerfil.css'

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
                <section className='w-100 h-auto'>
                  <h2 className='text-left' style={{ width: '100%', fontSize: '20px', fontFamily: 'var(--titulo)', color: 'var(--textosColor)' }}>
                    Publicaciónes de {titulo}
                  </h2>
                  <Swiper
                    className='mySwipper'
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    // modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev'
                    }}
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    autoplay={{ delay: 8000 }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{ width: '100%', height: '400px', margin: '0 auto', padding: '0 5px' }}
                    slidesPerView={1} // Valor por defecto para pantallas pequeñas
                    breakpoints={{
                      768: {
                        slidesPerView: 2 // Mostrar 2 tarjetas en pantallas con un ancho mínimo de 768px (tabletas)
                      },
                      992: {
                        slidesPerView: 3 // Mostrar 3 tarjetas en pantallas con un ancho mínimo de 992px (pantallas grandes)
                      },
                      1200: {
                        slidesPerView: 4 // Mostrar 4 tarjetas en pantallas con un ancho mínimo de 1200px (pantallas más grandes)
                      }
                    }}
                  >
                    {
                      userProducts.map((producto, index) => {
                        return (
                          <SwiperSlide key={index} className='swipperSlider'>
                            <CardPrueba element={producto} />
                          </SwiperSlide>
                        )
                      })
                    }
                    <div className='swiper-button-next'>
                      <ion-icon style={{ color: 'var(--background-naClaro)' }} name='chevron-forward-sharp' />
                    </div>
                    <div className='swiper-button-prev'>
                      <ion-icon name='chevron-back-sharp' />
                    </div>
                  </Swiper>
                </section>
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
