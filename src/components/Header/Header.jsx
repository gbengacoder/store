import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'
import classes from './Header.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
 

const Header = () => {
  const {toggleCart , cartItems} = useContext(CartContext)
  const items = cartItems
  const totalItemQuantity =
  items.length != 0
    ? items.map((item) => item.quantity).reduce((a, b) => a + b)
    :0


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
            {totalItemQuantity}
               </p>
            <FontAwesomeIcon  onClick={() => toggleCart()}  icon={faShoppingCart} size = '2x' style ={{color : 'black'}} />
            </div>
    </nav>
    </div>
  )
}

export default Header