import { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

import { useDispatch, useSelector } from 'react-redux'

function SearchBar ({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const products = useSelector((state) => state?.products?.products)
  const results = useSelector((state) => state?.products?.searchResults)
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault()
    const filteredData = products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    dispatch({ type: 'products/addToSearchResults', payload: filteredData })
  }

  useEffect(() => {
    console.log(results)
  }, [results])

  return (
    <>
      {/* <form onSubmit={handleSearch}>
        <input
          type='text'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type='submit'>Search</button>
      </form> */}

      <Paper
        component='form'
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
        onSubmit={handleSearch}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Buscar Por Palabra'
          inputProps={{ 'aria-label': 'Buscar Por Palabra' }}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  )
}

export default SearchBar