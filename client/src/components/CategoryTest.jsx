import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, fetchProductsByCategory } from '../features/products/fetchProducts'
import { v4 as uuidv4 } from 'uuid'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Loading from './Loading'
import ProductsCard from './ListProduct/ProductsCard'
import { Grid } from '@mui/material'

const CategoryTest = () => {
  const categories = useSelector((state) => state?.products?.category)
  const loading = useSelector((state) => state?.products?.loading)
  const filtrados = useSelector((state) => state?.products?.productsByCategory)

  const dispatch = useDispatch()

  const [categori, setCategori] = useState('')

  const handleChange = (event) => {
    setCategori(event.target.value)
  }

  useEffect(() => {
    dispatch(fetchCategories())
      .then((response) => {
        console.log('RESPUESTA ->', response)
      })
      .catch((error) => {
        console.log('ERROR ->', error)
      })
  }, [dispatch])

  useEffect(() => {
    console.log('categoria Selecionada -> ', categori)
    dispatch(fetchProductsByCategory(categori))
      .then((response) => {
        console.log('Respuesta Categories ->', response.payload)
      })
      .catch((error) => {
        console.log('ERROR ->', error)
      })
  }, [categori])

  console.log(filtrados)
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* <h2>Categorias</h2> */}
      <div sx={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ minWidth: 120, maxWidth: 160 }}>
          {
            loading
              ? <Loading />
              : (
                <FormControl fullWidth >
                  <InputLabel id='demo-simple-select-label' style={{color: "white"}}>Categorias</InputLabel>
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

      </div>

      {/* <div>
        <h2>productos filtrados por categoria</h2>
        <Grid container spacing={2}>
          {filtrados.length > 0
            ? (filtrados.map((obj) =>
              <ProductsCard key={uuidv4()} producto={obj} />
              ))
            : <p>No selecciono ningunacategoria</p>}

          {filtrados
            ? (filtrados.map((obj) =>
              <ProductsCard key={uuidv4()} producto={obj} />
              ))
            : <p>No selecciono ninguna categoria</p>}
        </Grid>

      </div> */}
    </div>
  )
}

export default CategoryTest
