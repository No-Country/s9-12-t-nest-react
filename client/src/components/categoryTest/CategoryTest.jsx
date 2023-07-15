import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, fetchProductsByCategory } from '../../features/products/fetchProducts'
import { v4 as uuidv4 } from 'uuid'
import { Form } from 'react-bootstrap'
import './categoryTest.css'

const CategoryTest = () => {
  const categories = useSelector((state) => state?.products?.category)

  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  // const [categori, setCategori] = useState('')

  // const handleChange = (event) => {
  //   setCategori(event.target.value)
  // }
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectOption = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
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
    dispatch(fetchProductsByCategory(selectedOption))
  }, [dispatch, selectedOption])

  return (
    <section className='h-100 d-flex justify-content-center align-items-center' style={{ background: 'tomato' }}>
      <div className='relative d-flex justify-content-center align-items-center flex-column contiene-categorias' style={{ width: '160px', height: '40px' }}>
        {/* <h2>Categorias</h2> */}
        <div className='custom-dropdown '>
          <div className='dropdown-header' onClick={toggleDropdown}>
            {selectedOption || 'Categorias'}
          </div>
          {isOpen && (
            <div className='dropdown-options'>
              {categories.map((obj) => (
                <div
                  key={uuidv4()}
                  className={`option ${selectedOption === obj ? 'selected' : ''}`}
                  onClick={() => selectOption(obj)}
                >
                  {obj}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CategoryTest
