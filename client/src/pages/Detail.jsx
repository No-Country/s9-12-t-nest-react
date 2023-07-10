import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Card, CardContent } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductById } from '../features/products/fetchProducts'
import Loading from '../components/Loading'
import MapView from '../components/MapView/MapView'

export default function Detail () {
  const product = useSelector((state) => state?.products?.productById)
  const loading = useSelector((state) => state?.products?.loading)
  const dispatch = useDispatch()

  const { id } = useParams()

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
              <Typography variant='h5' component='div'>
                {product.titule}
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
  )
};
