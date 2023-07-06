import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import CategoryTest from '../components/CategoryTest'
import Search from '../components/Search/Search'

function AppRouter () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detalle/:id' element={<Detail />} />
        <Route path='/categories' element={<CategoryTest />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
