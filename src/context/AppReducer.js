export default (state, action) => {
  switch (action.type) {
    case "add_cart":
      return {
        ...state,
        cartItem: [action.payload, ...state.cartItem],
      };

    case "remove_cart":
      return {
        cartItem: [...state.cartItem],
      };

    case "empty_cart":
      return {
        cartItem: [],
      };
    default:
      state;
  }
};
