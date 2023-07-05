import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsCategories } from '../features/products/fetchProducts'
import { v4 as uuidv4 } from 'uuid'

import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Loading from './Loading'

const CategoryTest = () => {
  const categories = useSelector((state) => state?.products?.category)
  const loading = useSelector((state) => state?.products?.loading)

  const dispatch = useDispatch()

  const [categori, setCategori] = React.useState('')

  const handleChange = (event) => {
    setCategori(event.target.value)
  }

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

      <Box sx={{ minWidth: 120 }}>
        {
          loading
            ? <Loading />
            : (
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Opcion</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={categori}
                  label='Opcion'
                  onChange={handleChange}
                >{
                categories.map((obj) =>
                  <MenuItem key={uuidv4()} value={obj}>{obj}</MenuItem>
                )
          }
                </Select>
              </FormControl>
              )
        }

      </Box>
    </>
  )
}

export default CategoryTest
