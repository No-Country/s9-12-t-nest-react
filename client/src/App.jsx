// import './App.css'

import { useEffect, useState } from 'react'
import NavBarBootstrap from './components/Navbar/NavbarBootstrap'
import AppRouter from './routes/AppRouter'

// import NavBar from "./components/Navbar/Navbar";

function App () {
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0
  })
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        }
        )
      },
      function (error) {
        console.log(error)
      },
      {
        enableHighAccuracy: true
      }
    )
  })

  return (
    <>
      <NavBarBootstrap />

      <AppRouter state={state} />

    </>
  )
}

export default App
