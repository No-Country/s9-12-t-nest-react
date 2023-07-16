import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, fetchProductsByCategory } from '../../features/products/fetchProducts'
import { v4 as uuidv4 } from 'uuid'
import { Form } from 'react-bootstrap'
import './categoryTest.css'

const CategoryTest = () => {
  const categories = useSelector((state) => state?.products?.category)

  const dispatch = useDispatch()

  const [categori, setCategori] = useState('')

  const handleChange = (event) => {
    setCategori(event.target.value)
  }

  useEffect(() => {
    dispatch(fetchCategories())
      .then((response) => {
        // console.log('RESPUESTA ->', response)
      })
      .catch((error) => {
        console.log('ERROR ->', error)
      })
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchProductsByCategory(categori))
  }, [categori])

  return (
    <section className='h-100 d-flex justify-content-center align-items-center' style={{ background: 'tomato' }}>
      <div className='contenedorPrincipal d-flex justify-content-center align-items-center flex-column contiene-categorias' style={{ width: '120px', height: '40px', position: 'relative' }}>
        {/* <h2>Categorias</h2> */}
        <Form.Select
          className='formSelect rounded-0 fw-bold position-relative w-100 h-100 border-0 text-light'
          style={{
            fontSize: '16px',
            background: 'var(--background-naClaro)'
          }}
          id='categorySelect'
          value={categori}
          onChange={handleChange}
        >

          <option value='' className='fw-bold'>Categorias</option>
          {categories.map((obj) => (
            <option key={uuidv4()} value={obj}>{obj}</option>
          ))}
        </Form.Select>
        <div className='iconoCategory '>
          <ion-icon name='chevron-down-sharp' />
        </div>
      </div>
    </section>
  )
}

export default CategoryTest
