import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap/'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../features/categoriesSlice/categorySlice'
import { getSubcategories } from '../../features/subCategoriesSlice/subcategoriesSlice'
import { getUsers } from '../../features/authSlice/authSlice'

const FormCargaProducts = () => {
  const usuarios = useSelector((state) => state?.authUser?.usersList)
  const categorias = useSelector((state) => state?.categories?.categories)
  const subcategorias = useSelector((state) => state?.subcategories?.subcategories)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
  }, [dispatch])

  useEffect(() => {
    dispatch(getSubcategories())
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
  }, [dispatch])

  useEffect(() => {
    dispatch(getUsers())
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
  }, [dispatch])

  console.log(categorias)
  console.log(usuarios)
  console.log(subcategorias)

  /*
  {
  "name": "string",
  "description": "string",
  "price": 20,
  "images": [
    "string"
  ],
  "owner": "string",
  "category": "string",
  "subcategories": [
    "string"
  ]
}
  */

  return (
    <div className='container'>
      <h1>Formulario de carga de productos</h1>
      <Form>
        <Form.Group className='mb-3' controlId='formGroupName'>
          <Form.Label>nombre</Form.Label>
          <Form.Control type='text' placeholder='Nombre producto' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupDescription'>
          <Form.Label>descripcion</Form.Label>
          <Form.Control type='text' placeholder='Descripcion producto' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPrecio'>
          <Form.Label>precio</Form.Label>
          <Form.Control type='number' placeholder='precio producto' />
        </Form.Group>

        <Form.Group controlId='formFile' className='mb-3'>
          <Form.Label>Suba una imagen</Form.Label>
          <Form.Control type='file' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formGroupimage'>
          <Form.Select aria-label='select dueño'>
            <option>Open this select menu</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formGroupimage'>
          <Form.Select aria-label='select category'>
            <option>Open this select menu</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formGroupimage'>
          <Form.Select aria-label='select subcategory'>
            <option>Open this select menu</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </Form.Select>
        </Form.Group>
        <Button type='submit'>Submit form</Button>

      </Form>
    </div>
  )
}

export default FormCargaProducts
