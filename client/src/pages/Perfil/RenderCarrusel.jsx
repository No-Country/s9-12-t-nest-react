import React, { useEffect } from 'react'
import { getProducts } from '../../features/productsSlice/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../components/carousel/Carousel'
import Loading from '../../components/Loading'

const RenderCarrusel = ({ filtroPor, titulo }) => {
  const productos = useSelector((state) => state?.productsDb?.products)
  const loading = useSelector((state) => state?.productsDb?.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
      .then((resp) => {
        // const final = resp.find(producto => producto.id === usuarioo.id)
        console.log(resp.payload.find(producto => producto.owner === filtroPor))
      })
  }, [dispatch])

  console.log(productos)
  return (
    <>
      {
        loading
          ? (
            <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '306px' }}>
              <Loading />
            </div>)
          : (
              productos.length === 0
                ? null
                : (
                  <section className='d-flex flex-column flex-nowrap  justify-content-start align-items-start' style={{ width: '100%', height: 'auto' }}>
                    <h3 className='text-left' style={{ textAlign: 'center', color: '#333' }}>Publicaciones {titulo}</h3>
                    <Carousel data={productos} />
                  </section>
                  )
            )
      }
    </>

  )
}

export default RenderCarrusel
