import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, fetchProductsByCategory } from '../features/products/fetchProducts'
import { v4 as uuidv4 } from 'uuid'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

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
    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* <h2>Categorias</h2> */}
      <div sx={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ minWidth: 120, maxWidth: 160 }}>

          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label' style={{ color: 'white' }}>Categorias</InputLabel>
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

        </Box>

      </div>
    </div>
  )
}

export default CategoryTest
