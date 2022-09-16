import React, { useState ,useContext, useEffect} from "react";
import classes from './Homepage.module.scss'
import Header from "../../components/Header/Header";
import { CartContext } from "../../context/cart-context";
import Products from "../../components/Products/Products";
import Cart from "../../components/cart/Cart";

const Homepage = () => {

  const {cartIsShown} = useContext(CartContext)
  

  
    const rand = Math.floor(  Math.random() * 20 )

    const [img ,setImg] = useState('')
    const [products ,setProducts] = useState([])
   
   
    const fetchProducts = async () =>{
        const response = await fetch('https://fakestoreapi.com/products')
         
        const data = await response.json()
   

        const image = data[rand].image
        setProducts(data)
        setImg(image)
     
    }
 
        useEffect(() =>{
             fetchProducts()
        }, [])
  return (
    <div>
      <Header /> 
      {cartIsShown &&
      <Cart/>
      }
      <div className={classes.heroContainer}>

      <div className={classes.hero}>
        <div className={classes.first}>
            <div className={classes.left}>
             
          <h2>Shop for whatever you want</h2>
          <h3>
           Get whatever you want at a great price while getting value for money on purchases with great discount
           
          </h3>
          <button>Shop Now</button>
        </div>
        <img src={img} alt="img" />
            </div>
        <div className={classes.second}></div>
      </div>
      </div>

      <div className="productsContainer">
         <Products products = {products}/>
      </div>
    </div>
  );
};

export default Homepage;
