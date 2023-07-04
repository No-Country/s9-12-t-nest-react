import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material'

export default function card (products) {
  return (
    <Grid container spacing={2}>
      {products.props.productos.map((producto) => (
        <Grid item xs={12} sm={6} md={4} key={producto.id}>
          <Link to={`/detalle/${producto.id}`} style={{ textDecoration: 'none' }}>
            <Card>
              <CardMedia
                component='img'
                alt={producto.titulo}
                height='200'
                image={producto.imagen}
              />
              <CardContent>
                <Typography variant='h6' component='div'>
                  {producto.titulo}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {producto.descripcion}
                </Typography>
                <Typography variant='caption' color='text.secondary'>
                  Categoría: {producto.categoria}
                </Typography>
                <Typography variant='caption' color='text.secondary'>
                  Estado: {producto.estado}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
