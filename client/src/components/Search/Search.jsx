import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../features/products/fetchProducts'
import Loading from '../Loading'
import "./search.css";

const Search = () => {
  const loading = useSelector((state) => state?.products?.loading)
  const products = useSelector((state) => state?.products?.products)
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState([])
  const dispatch = useDispatch()

  console.log('tiped ->', products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const handleClickSearch = () => {
    setFilters(products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    console.log('Prods Filtrados ->', filters)
  }

  return (
    <div className='buscador'>
      {
        loading
          ? <Loading />
          : (
            <>
              <Paper
                component='form'
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder='Buscar en Trueka'
                  inputProps={{ 'aria-label': 'Buscar Por Palabra' }}
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
                <IconButton onClick={handleClickSearch} type='button' sx={{ p: '10px' }} aria-label='search'>
                  <SearchIcon />
                </IconButton>
              </Paper>
            </>
            )
      }
    </div>
  )
}

export default Search
