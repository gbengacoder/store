import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Product.module.scss'
const Product = ({title ,image, price ,id}) => {
  const itemTitle = title.length > 30 ?  `${title.substring(0, 30)}...` : title
  return (
    <div className={classes.productContainer}>
      <Link to = {`/products/${id}`}>
      <div className={classes.top}>
        <img src={image} height = '100px' width= '100px'  alt="" />
      </div>
      <div className={classes.bottom}>
         <h3 className={classes.title}>{itemTitle}</h3>
         <h3 className={classes.price}>&#8358; {price}</h3>
      </div>
      </Link>
    </div>
  )
}

export default Product