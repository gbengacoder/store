import React, { useContext, useEffect } from "react";
import classes from "./Cart.module.scss";
import { CartContext } from "../../context/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
  const ctx = useContext(CartContext);
  useEffect(() => {}, [ctx]);
  const items = ctx.cartItems;

  console.log(items);

  const emptyCart = ctx.emptyCart;

  const sumPrice =
    items.length != 0
      ? items.map((item) => item.totalPrice).reduce((a, b) => a + b)
      : items.map((item) =>{

        item[0].price

      }
       );


  return (
    <div className={classes.cart}>
      {items.length === 0 && <h3>Cart is Empty</h3>}
      {items.map((item) => (
        <CartItem
          key={item.id}
          totalPrice={item.totalPrice}
          id={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}

      {items.length !== 0 && <h4>Total Price : ${sumPrice.toFixed(2)}</h4>}

      {items.length != 0 && (
        <button
          className={classes.empty}
          onClick={() => {
            emptyCart();
          }}
        >
          Remove All Items
        </button>
      )}
    </div>
  );
};

export default Cart;
