import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Typography, Card, CardContent } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductById } from '../features/products/fetchProducts'
import Loading from '../components/Loading'
import MapView from '../components/MapView/MapView'
import './Detalle.css'
import Button from 'react-bootstrap/esm/Button'
import Carousel from '../components/carousel/Carousel'
import { getProducts } from '../features/products/fetchProducts'

export default function Detail() {
  const product = useSelector((state) => state?.products?.productById)
  const loading = useSelector((state) => state?.products?.loading)
  const globalProduct = useSelector((state) => state?.products?.products)
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const { id } = useParams()

  console.log("lo que viene de product")
  console.log(product)
  console.log("viene de global")
  console.log(globalProduct)

  useEffect(() => {
    dispatch(fetchProductById(id))
  }, [dispatch])

  // console.log('Producto filtrado -> ', product)
  // const product = products.productos.find((product) => product.id === id)
  // if (!product) {
  //   return <Typography variant='h6'>Product no encontrado</Typography>
  // }
  if (!product) {
    return <Typography variant='h6'>Product no encontrado</Typography>
  }

  return (
    <div>
      <h3 className='titulo-detalle'>{product.title}</h3>
      <div className='imagen-descripcion'>
        <div className='contenedor-imagen'>
          <img src={product.image} alt="" className='imagen-producto' />

        </div>

        

          <div className='usuario-descripcion'>

            <h4 className='nombre-usuario'>Nombre del Usuario</h4>
            <div className='estrellas'>
              <img src="/images/star_rate.png" alt="" />
              <img src="/images/star_rate.png" alt="" />
              <img src="/images/star_rate.png" alt="" />
              <img src="/images/star_rate.png" alt="" />
              <img src="/images/star_rate.png" alt="" />

            </div>

            <hr />

            <p className='descripcion'>{product.description}</p>
          </div>
        
      </div>

      <hr />

      <h4 className='ubicacion'>Ubicacion</h4>

      <div className='mapa'><MapView /></div>

      <div className='boton'>
        <button className='ofertar'>Ofertar</button>

      </div>
      <h6 className='ubicacion'>Otras publicaciones de este usuario.</h6>


      <div className='control-carrusel'>
        <div className='carrusel'>
          <Carousel data={globalProduct} />

        </div>

      </div>









    </div>
  )


};





/*return (
  <>
    <Card style={{
      width: '350px',
      aspectRatio: '1/1',
      margin: 'auto',
      marginTop: '5rem',
      border: '1px solid #ccc',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', gap: '1rem' }}>
        {
          loading
            ? <Loading />
            : (
              <>
                <div>
                  <img src={product.image} alt='' />

                </div>

                <Typography variant='h5' component='div'>
                  Titulo: {product.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {product.description}
                </Typography>
                <Typography variant='caption' color='text.secondary'>
                  Categoría: {product.category}
                </Typography>
                <Typography variant='caption' color='text.secondary'>
                  Estado: {product.price}
                </Typography>
              </>
            )
        }

      </CardContent>
    </Card>
    <MapView />
  </>
)*/


/*<p>Categoría: {product.category}.</p>
<p>Estado: {product.price}</p>*/