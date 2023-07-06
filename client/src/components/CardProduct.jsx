import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material'

export default function card (products) {
  console.log('producto cardProduct ->', products)
  return (
    <Grid container spacing={2}>
      {products.props.map((producto) => (
        <Grid item xs={12} sm={6} md={4} key={producto.id}>
          <Link to={`/detalle/${producto.id}`} style={{ textDecoration: 'none' }}>
            <Card>
              <CardMedia
                component='img'
                alt={producto.title}
                height='200'
                image={producto.image}
              />

              <CardContent>
                <Typography variant='h6' component='div'>
                  {producto.title}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {producto.description}
                </Typography>
                <Typography variant='h6' component='div'>
                  ${producto.price}
                </Typography>
                {/* ... */}
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
