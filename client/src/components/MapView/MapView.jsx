import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function MapView () {
  const location = useSelector(state => state.location)
  console.log(location)
  const [state, setState] = useState({
    currentLocation: { lat: location.latitude, lng: location.longitude }
  })

  return (
    <MapContainer center={state.currentLocation} zoom={13} style={{ height: '300px', width: '300px', margin: '2rem auto' }}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={{ lat: 51.5381321, lng: -0.2252213 }} />
    </MapContainer>
  )
}

export default MapView
