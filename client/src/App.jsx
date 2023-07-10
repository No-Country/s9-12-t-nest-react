import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLocation } from './/features/location/location'
import NavBarBootstrap from './components/Navbar/NavbarBootstrap'
import AppRouter from './routes/AppRouter'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
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
    <>
      <NavBarBootstrap />
      <AppRouter />
    </>
  )
}

export default App
