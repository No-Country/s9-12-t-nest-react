import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductByKeyword } from '../../features/products/fetchProducts'

const Search = () => {
  const loading = useSelector((state) => state?.products?.loading)
  const palabraClave = useSelector((state) => state?.products?.productsByKeyword)
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()

  console.log('tiped ->', searchTerm)

  // useEffect(() => {
  //   dispatch(fetchProductByKeyword())
  //     .then((response) => {
  //       console.log('RESPUESTA ->', response)
  //     })
  //     .catch((error) => {
  //       console.log('ERROR ->', error)
  //     })
  // }, [dispatch])
  const handleClickSearch = () => {
    dispatch(fetchProductByKeyword(searchTerm))
      .then((response) => {
        console.log('RESPUESTA ->', response)
      })
      .catch((error) => {
        console.log('ERROR ->', error)
      })
  }

  console.log(palabraClave)
  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', marginTop: '1rem' }}>
      <Paper
        component='form'
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Buscar Por Palabra'
          inputProps={{ 'aria-label': 'Buscar Por Palabra' }}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <IconButton onClick={handleClickSearch} type='button' sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  )
}

export default Search
