
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductById, getProducts } from '../features/products/fetchProducts'

const Ofertar = () => {

    const product = useSelector((state) => state?.products?.productById)
    const loading = useSelector((state) => state?.products?.loading)
    const globalProduct = useSelector((state) => state?.products?.products)
    const dispatch = useDispatch()

    const { id } = useParams()

    console.log("recibo en ofertar")

    console.log(id)

    useEffect(() => {
        dispatch(fetchProductById(id))
    }, [dispatch])



    return (
        <div>
            <h3 className='titulo-detalle'>{product.title}</h3>
            <div className='imagen-descripcion'>
                <div className='contenedor-imagen'>
                    <img src={product.image} alt='' className='imagen-producto' />

                </div>
            </div>
        </div>
    )
}

export default Ofertar