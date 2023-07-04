import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsCategories } from '../features/products/fetchProducts'
import { v4 as uuidv4 } from 'uuid'

const CategoryTest = () => {
  const categories = useSelector((state) => state?.products?.category)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsCategories())
      .then((response) => {
        console.log('RESPUESTA ->', response)
      })
      .catch((error) => {
        console.log('ERROR ->', error)
      })
  }, [dispatch])

  return (
    <>
      <h2>Categorias</h2>
      {
      categories.map((obj) =>
        <p key={uuidv4()}>{obj}</p>
      )
      }
    </>
  )
}

export default CategoryTest
