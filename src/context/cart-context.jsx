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

    console.log(state.cartItem)
    setChange(!change);
    state.totalQty++;

    console.log(state.totalQty)
    const newItem = items;
    console.log(newItem)
    const existingItem = state.cartItem.find((item) => item.id === newItem.id) 
    //console.log(existingItem?. null ) 
    newItem.totalPrice = newItem.price
    if (!existingItem) {
      dispatch({
        type: "add_cart",
        payload: items,
      });
    } else {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.price * existingItem.quantity;
    }

    console.log(state.cartItem)


  }

  function emptyCart() {
    dispatch({
      type: "empty_cart",
    });
  }
  function removeFromCart(id) {
    const existingItem = state.cartItem.find((item) => item.id === id);
    console.log(existingItem)
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
