import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import CardProduct from '../components/CardProduct'
import Loading from '../components/Loading'
import { getProducts } from '../features/products/fetchProducts'
import '../pages/styles/Home.css'

function Home () {
  const products = useSelector((state) => state?.products?.products)
  const loading = useSelector((state) => state?.products?.loading)
  const results = useSelector((state) => state?.products?.searchResults)

  const dispatch = useDispatch()

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
                  <CardProduct props={products} />
                </>)
              : (results !== 'none' ? <CardProduct props={results} /> : 'No se encontraron resultados')
          )}
    </>
  )
}

export default Home
