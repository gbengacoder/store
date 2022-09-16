import { useContext } from "react";
import classes from "./Cart.module.scss";
import { CartContext } from "../../context/cart-context";
const CartItem = ({ id, quantity, totalPrice, price, title }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <h5 className={classes.name}>{title.split(" ")[0]}..</h5>
        <div className={classes.price}>
       {quantity === 1 ? <h5>${price.toFixed(2)}</h5> : <h5>${totalPrice.toFixed(2) }</h5>}
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.qty}>
          x <span> {quantity} </span>
        </div>
        <div className={classes.btns}>
          <button onClick={() => removeFromCart(id)}>-</button>
          <button
            onClick={() =>
              addToCart({ id, totalPrice, price, quantity, title })
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
