import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {Socket, io} from 'socket.io-client'
import { setLocation } from './/features/location/location'
import AppRouter from './routes/AppRouter'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { login, storeAccessToken } from './features/AutenticationSlice/AutenticationSlice'

function App() {
  const [socket, setSocket] = useEffect()
  const dispatch = useDispatch()
  // const [authorizationCode, setAuthorizationCode] = useState('')

  useEffect(() => {
    // console.log('SE EJECUTA FUNC APP')
    navigator.geolocation.getCurrentPosition(
      function (position) {
        dispatch(
          setLocation({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
          })
        )
      },
      function (error) {
        // console.log(error)
      },
      {
        enableHighAccuracy: true
      }
    )
  }, [dispatch])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    if (code) {
      dispatch(storeAccessToken(code))

      console.log('Token de acceso obtenido correctamente', code)
    }
  }, [])

  return (
    <div className='probando'>

      <AppRouter />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <ToastContainer />
    </div>
  )
}

export default App
