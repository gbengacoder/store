import React from 'react'
import Product from './Product'
import classes from './Product.module.scss'
const Products = ({products}) => {
  return (
    <div className={classes.products}>{
        products.map((product) =>(
      
            <Product key={product.id} image = {product.image} title = {product.title} id = {product.id} price = {product.price}/>
           
        ))
        }</div>
  )
}

export default Products