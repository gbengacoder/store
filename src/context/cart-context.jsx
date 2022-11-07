import { useState, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const obj = window.localStorage.getItem("cart");
const cartState = JSON.parse(obj) || [];

const initialState = {
  totalQty: 0,
  cartItem: cartState,
};
export const CartContext = createContext(initialState);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const [cartIsShown, setCartIsShown] = useState(false);
  const [change, setChange] = useState(false);

  function toggleCart() {
    setCartIsShown(!cartIsShown);
  }

  function addToCart(items) {
    setChange(!change);
    state.totalQty++;

    const newItem = items;

    const existingItem = state.cartItem.find((item) => item.id === newItem.id);

    newItem.totalPrice = newItem.price;
    if (!existingItem) {
      dispatch({
        type: "add_cart",
        payload: items,
      });
    } else {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.price * existingItem.quantity;
    }

    const cartArr = state.cartItem;

    window.localStorage.setItem("cart", JSON.stringify(cartArr));
  }

  function emptyCart() {
    dispatch({
      type: "empty_cart",
    });
    window.localStorage.setItem("cart", JSON.stringify([]));
  }
  function removeFromCart(id) {
    const existingItem = state.cartItem.find((item) => item.id === id);
    
    if (existingItem.quantity === 1) {
      state.totalQty = 0;
      state.cartItem = state.cartItem.filter((item) => item.id !== id);
    } else {
      Number(state.totalQty--);
      existingItem.quantity--;
      existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
    }
    
    dispatch({
      type: "remove_cart",
      payload: id,
    });

    const cartArr = state.cartItem;
    window.localStorage.setItem("cart", JSON.stringify(cartArr));
  }

  return (
    <CartContext.Provider
      value={{
        cartIsShown,
        totalQuantity: state.totalQty,
        cartItems: state.cartItem,
        addToCart,
        emptyCart,
        removeFromCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
