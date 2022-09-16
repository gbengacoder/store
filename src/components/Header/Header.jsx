import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'
import classes from './Header.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
 

const Header = () => {
  const {toggleCart , totalQuantity , cartItems} = useContext(CartContext)
 let totalQty = cartItems.length

  return (
    <div className={classes.container}>
    <nav>
            <div className={classes.logo}>
      <Link to = '/'> 
                <h1>Store</h1>
      </Link>
            </div>
            
            <div className={classes.cart}>
               <p className={classes.qty}>
            {totalQty}
               </p>
            <FontAwesomeIcon  onClick={() => toggleCart()}  icon={faShoppingCart} size = '2x' style ={{color : 'black'}} />
            </div>
    </nav>
    </div>
  )
}

export default Header