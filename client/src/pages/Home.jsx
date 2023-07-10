import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import CardProduct from '../components/CardProduct'
import Loading from '../components/Loading'
import { getProducts } from '../features/products/fetchProducts'
import '../pages/styles/Home.css'
import Carousel from '../components/carousel/Carousel'

function Home () {
  const products = useSelector((state) => state?.products?.products)
  const loading = useSelector((state) => state?.products?.loading)
  const results = useSelector((state) => state?.products?.searchResults)
  const latest = [...products].sort((a, b) => b.id - a.id).slice(0, 12)

  const dispatch = useDispatch()
  // const justifyContent = results.length < 5 ? 'flex-start' : 'center'
  const gridTemplateColumns = results.length < 6 ? 'repeat(auto-fit, minmax(170px, 200px))' : 'repeat(auto-fit, minmax(190px, 0.4fr))'
  // console.log(justifyContent)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      {loading
        ? (
          <div className='loading-container'>
            <Loading />
          </div>

          )
        : (
            !results
              ? (
                <>
                  <div className='home-container'>
                    <div className='carousel-rows-container'>
                      <div className='p-carousel-container'>
                        <p className='carousel-title'>Últimas publicaciones</p>
                        <Carousel data={latest} />
                      </div>

                      <div className='p-carousel-container'>
                        <p className='carousel-title'>Publicaciones populares</p>
                        <Carousel data={products} />
                      </div>

                      <div className='p-carousel-container'>
                        <p className='carousel-title'>Publicaciones que seguís</p>
                        <Carousel data={products} />
                      </div>

                    </div>
                  </div>

                </>)
              : (results !== 'none'
                  ? (
                    <>
                      <div className='home-container'>
                        <div className='products-container' style={{ gridTemplateColumns }}>
                          <CardProduct className='products-list' props={results} />
                        </div>
                      </div>

                    </>)
                  : <div className='home-container carousel-title'>
                    No se encontraron resultados
                  </div>
                )
          )}
    </>
  )
}

export default Home
