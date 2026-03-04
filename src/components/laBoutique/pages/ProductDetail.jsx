import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../../nav/Nav'
import Footer from '../../FOOTER/Footer'

const ProductDetail = () => {
   const {id} = useParams()
   const[product ,setProduct] =useState(null)

   useEffect(()=>{
     fetch(`http://localhost:5000/products/${id}`)
       .then(res => res.json())
       .then(data => setProduct(data))
   } ,[id])

    if (!product) return <div>Loading...</div>


  return (
    <div>
        <Nav />
        <h1>Product Detail</h1>
        {product && (
          <div>
            <h1>{product.name}</h1>
            <p>SKU: {product.sku}</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        )}
        <Footer />
    </div>
  )
}

export default ProductDetail