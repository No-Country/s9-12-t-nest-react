import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
// import { Typography, Card, CardContent } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchProductById, getProducts } from '../features/products/fetchProducts'
import MapView from '../components/MapView/MapView'
import './Detalle.css'
import Carousel from '../components/carousel/Carousel'
import LocationName from '../components/LocationName/LocationName'
/* prueba dispach */
import Stars from './Perfil/Stars/Stars'
import { getProductById } from '../features/productsSlice/productSlice'
import Loading from '../components/Loading'

export default function Detail () {
  const productById = useSelector((state) => state?.productsDb?.productById)
  const producGeneral = useSelector((state) => state?.productsDb?.products)
  const loading = useSelector((state) => state?.productsDb?.loading)
  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(() => {
    dispatch(getProductById())
      .then((res) => {
        console.log('res', res)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }, [dispatch, id])

  console.log('id ->', id)

  console.log('lo que viene de product')

  return (
    <>
      {
      loading
        ? (
          <div className='d-flex justify-content-center align-items-center ' style={{ width: '100%', height: '370px' }}>
            <Loading />
          </div>
          )
        : (
            productById
              ? (
                <div>
                  <h3 className='titulo-detalle'>{productById.name}</h3>
                  <div className='imagen-descripcion'>
                    <div className='contenedor-imagen'>
                      <img src={productById.images[0]} alt='' className='imagen-producto' />
                    </div>
                    <div className='usuario-descripcion'>
                      <h4 className='nombre-usuario'>Nombre del Usuario</h4>
                      <div className='estrellas'>
                        <Stars number={6} />
                        {/* <img src='/images/star_rate.png' alt='' />
                  <img src='/images/star_rate.png' alt='' />
                  <img src='/images/star_rate.png' alt='' />
                  <img src='/images/star_rate.png' alt='' />
                  <img src='/images/star_rate.png' alt='' /> */}
                      </div>
                      <hr />
                      <p className='descripcion'>{productById.description}</p>
                    </div>
                  </div>
                  <hr />
                  <h4 className='ubicacion'>Ubicacion</h4>
                  <div className='controlar-mapa'>
                    <div className='mapa'><MapView /></div>
                  </div>
                  <LocationName />
                  <div className='boton'>
                    <Link to={`/ofertar/${productById._id}`}><button className='ofertar' product={productById}>Ofertar</button></Link>
                  </div>
                  <h6 className='ubicacion'>Otras publicaciones de este usuario.</h6>
                  <div className='control-carrusel'>
                    <div className='carrusel'>
                      <Carousel data={producGeneral} />
                    </div>
                  </div>
                </div>
                )
              : (
                <div className='sinProductos' style={{ width: '100%' }}>
                  <section className='carruselSinProductos' style={{ width: '100%', height: '270px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p>No se encontro ese producto</p>
                  </section>
                </div>
                )
          )
    }
    </>

  )
};

/* return (
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
) */

/* <p>Categoría: {product.category}.</p>
<p>Estado: {product.price}</p> */
