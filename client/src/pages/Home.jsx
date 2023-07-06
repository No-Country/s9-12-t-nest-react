import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import CardProduct from '../components/CardProduct'
import Loading from '../components/Loading'
import { getProducts } from '../features/products/fetchProducts'

// const products = {
//   productos: [
//     {
//       id: '1',
//       titulo: 'Camiseta de manga corta',
//       descripcion: 'Camiseta de algodón con estampado floral, talla M',
//       imagen: 'https://ejemplo.com/imagen1.jpg',
//       categoria: 'Ropa',
//       estado: 'Nuevo'
//     },
//     {
//       id: '2',
//       titulo: 'Teléfono inteligente',
//       descripcion: 'Teléfono Android de última generación, color negro',
//       imagen: 'https://ejemplo.com/imagen2.jpg',
//       categoria: 'Electrónica',
//       estado: 'Usado como nuevo'
//     },
//     {
//       id: '3',
//       titulo: 'Libro de ciencia ficción',
//       descripcion: 'Novela de aventuras espaciales escrita por John Doe',
//       imagen: 'https://ejemplo.com/imagen3.jpg',
//       categoria: 'Libros',
//       estado: 'Usado'
//     },
//     {
//       id: '4',
//       titulo: 'Zapatillas deportivas',
//       descripcion: 'Zapatillas para correr, color azul, talla 42',
//       imagen: 'https://ejemplo.com/imagen4.jpg',
//       categoria: 'Ropa',
//       estado: 'Nuevo'
//     },
//     {
//       id: '5',
//       titulo: 'Cámara digital',
//       descripcion: 'Cámara compacta de 20 megapíxeles, color plateado',
//       imagen: 'https://ejemplo.com/imagen5.jpg',
//       categoria: 'Electrónica',
//       estado: 'Usado'
//     },
//     {
//       id: '6',
//       titulo: 'Bolso de mano',
//       descripcion: 'Bolso de cuero sintético con asas y correa ajustable',
//       imagen: 'https://ejemplo.com/imagen6.jpg',
//       categoria: 'Moda',
//       estado: 'Nuevo'
//     },
//     {
//       id: '7',
//       titulo: 'Juego de mesa',
//       descripcion: 'Juego de estrategia para 2-4 jugadores, edad recomendada: 10+',
//       imagen: 'https://ejemplo.com/imagen7.jpg',
//       categoria: 'Juguetes',
//       estado: 'Usado como nuevo'
//     },
//     {
//       id: '8',
//       titulo: 'Gafas de sol',
//       descripcion: 'Gafas de sol con montura negra y lentes polarizadas',
//       imagen: 'https://ejemplo.com/imagen8.jpg',
//       categoria: 'Accesorios',
//       estado: 'Nuevo'
//     },
//     {
//       id: '9',
//       titulo: 'Laptop',
//       descripcion: 'Portátil de alta gama con procesador Intel Core i7 y 16 GB de RAM',
//       imagen: 'https://ejemplo.com/imagen9.jpg',
//       categoria: 'Electrónica',
//       estado: 'Usado'
//     },
//     {
//       id: '10',
//       titulo: 'Reloj de pulsera',
//       descripcion: 'Reloj analógico con correa de acero inoxidable, resistente al agua',
//       imagen: 'https://ejemplo.com/imagen10.jpg',
//       categoria: 'Accesorios',
//       estado: 'Nuevo'
//     }
//   ]
// }

function Home () {
  const products = useSelector((state) => state?.products?.products)
  const loading = useSelector((state) => state?.products?.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  console.log(products)
  return (
    <>{
      loading ? <Loading /> : <CardProduct props={products} />
    }

    </>
  )
}

export default Home
