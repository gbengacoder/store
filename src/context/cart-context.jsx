import { useState, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  totalQty: 0,
  cartItem: [],
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

    if (!existingItem) {
      dispatch({
        type: "add_cart",
        payload: items,
      });
    } else {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.price * existingItem.quantity;
    }
  }

  function emptyCart() {
    dispatch({
      type: "empty_cart",
    });
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
    console.log(id);
    dispatch({
      type: "remove_cart",
      payload: id,
    });
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
