import { useState } from 'react'

function SearchBar ({ data, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    onSearch(filteredData)
  }

  /* LA FUNCION YA ESTA HECHA, SOLO HAY QUE RECIBIR LA PROP "onSearch" DESDE EL COMPONENTE PADRE MEDIANTE UNA FUNCION, HASTA NO HACERLO VA A DAR UN ERROR AL MOMENTO DE HACER LA BUSQUEDA */

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          placeholder='Buscar en Trueka' img='/images/container.png'
          type='text'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <input type='image' src='/images/container.png' class='image_buscar' />

        {searchTerm === '' ? '' : handleSearch}
        {/* <button type='submit'>Search</button> */}
      </form>
    </>
  )
}

export default SearchBar
