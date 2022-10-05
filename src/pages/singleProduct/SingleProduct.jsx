import React, { useEffect,useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Cart from '../../components/cart/Cart'
import classes from './SingleProduct.module.scss'
import { CartContext } from "../../context/cart-context";

const SingleProduct = () => {

  
const {addToCart , cartIsShown , cartItems} = useContext(CartContext)
  

const [product , setProduct] = useState({})
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  

  const fetchProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/` + path);

    const data = await response.json();
  
    setProduct(data)
  };

  useEffect(() => {
    fetchProducts();
  }, []);
    const id = product.id
    const quantity = 1
    const title = product.title
    const price = product.price
    const description = product.description

  return (<>
  <Header/>
  {cartIsShown &&
      <Cart/>}
    <div className={classes.container}>
      <div className={classes.left}>
      <img src={product.image} alt="" />
      </div>
      <div className={classes.right}>
        <h2>
            {title}
          </h2>
          <p>{description}</p>

        <div className={classes.price}>
          ${price}
        </div>

        <button onClick={() => addToCart( {id ,price ,quantity, title})}>ADD TO CART</button>
      </div>
    </div>
  </>
  );
};

export default SingleProduct;
