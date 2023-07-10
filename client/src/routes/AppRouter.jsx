import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
// import CategoryTest from '../components/CategoryTest'
// import Search from '../components/Search/Search'
import Register from '../pages/Register'
import Login from '../pages/Login'
import PerfilUser from '../pages/PerfilUser'

function AppRouter ({ state }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/detalle/:id' element={<Detail />} />
        <Route path='/perfil' element={<PerfilUser />} />
        {/* <Route path='/categories' element={<CategoryTest />} />
        <Route path='/search' element={<Search />} /> */}
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
