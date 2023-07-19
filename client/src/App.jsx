import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLocation } from './/features/location/location'
import AppRouter from './routes/AppRouter'
import './index.css'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('SE EJECUTA FUNC APP')
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
        console.log(error)
      },
      {
        enableHighAccuracy: true
      }
    )
  }, [dispatch])

  return (
    <div className='probando'>

      <AppRouter />
    </div>
  )
}

export default App
