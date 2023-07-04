import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'

function AppRouter () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detalle/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
