import React from 'react'
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material'

const products = {
  productos: [
    {
      titulo: 'Camiseta de manga corta',
      descripcion: 'Camiseta de algodón con estampado floral, talla M',
      imagen: 'https://ejemplo.com/imagen1.jpg',
      categoria: 'Ropa',
      estado: 'Nuevo'
    },
    {
      titulo: 'Teléfono inteligente',
      descripcion: 'Teléfono Android de última generación, color negro',
      imagen: 'https://ejemplo.com/imagen2.jpg',
      categoria: 'Electrónica',
      estado: 'Usado como nuevo'
    },
    {
      titulo: 'Libro de ciencia ficción',
      descripcion: 'Novela de aventuras espaciales escrita por John Doe',
      imagen: 'https://ejemplo.com/imagen3.jpg',
      categoria: 'Libros',
      estado: 'Usado'
    },
    {
      titulo: 'Zapatillas deportivas',
      descripcion: 'Zapatillas para correr, color azul, talla 42',
      imagen: 'https://ejemplo.com/imagen4.jpg',
      categoria: 'Ropa',
      estado: 'Nuevo'
    },
    {
      titulo: 'Cámara digital',
      descripcion: 'Cámara compacta de 20 megapíxeles, color plateado',
      imagen: 'https://ejemplo.com/imagen5.jpg',
      categoria: 'Electrónica',
      estado: 'Usado'
    },
    {
      titulo: 'Bolso de mano',
      descripcion: 'Bolso de cuero sintético con asas y correa ajustable',
      imagen: 'https://ejemplo.com/imagen6.jpg',
      categoria: 'Moda',
      estado: 'Nuevo'
    },
    {
      titulo: 'Juego de mesa',
      descripcion: 'Juego de estrategia para 2-4 jugadores, edad recomendada: 10+',
      imagen: 'https://ejemplo.com/imagen7.jpg',
      categoria: 'Juguetes',
      estado: 'Usado como nuevo'
    },
    {
      titulo: 'Gafas de sol',
      descripcion: 'Gafas de sol con montura negra y lentes polarizadas',
      imagen: 'https://ejemplo.com/imagen8.jpg',
      categoria: 'Accesorios',
      estado: 'Nuevo'
    },
    {
      titulo: 'Laptop',
      descripcion: 'Portátil de alta gama con procesador Intel Core i7 y 16 GB de RAM',
      imagen: 'https://ejemplo.com/imagen9.jpg',
      categoria: 'Electrónica',
      estado: 'Usado'
    },
    {
      titulo: 'Reloj de pulsera',
      descripcion: 'Reloj analógico con correa de acero inoxidable, resistente al agua',
      imagen: 'https://ejemplo.com/imagen10.jpg',
      categoria: 'Accesorios',
      estado: 'Nuevo'
    }
  ]
}

export default function card () {
  return (
    <Grid container spacing={2}>
      {products.productos.map((producto, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
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
        </Grid>
      ))}
    </Grid>
  )
}
