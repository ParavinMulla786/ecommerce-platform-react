export const initialState = {
  cart: [],
};

export const cartReducer = (state, action) => {

  switch (action.type) {

    // ADD TO CART
    case "ADD_TO_CART":

      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      // IF PRODUCT ALREADY EXISTS
      if (existingProduct) {

        const updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          cart: updatedCart,
        };
      }

      // NEW PRODUCT ADD
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload, quantity: 1 },
        ],
      };

    // REMOVE FROM CART
    case "REMOVE_FROM_CART":

      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.payload
        ),
      };

    // INCREASE QUANTITY
    case "INCREASE_QUANTITY":

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    // DECREASE QUANTITY
    case "DECREASE_QUANTITY":

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity:
                  item.quantity > 1
                    ? item.quantity - 1
                    : 1,
              }
            : item
        ),
      };

    default:
      return state;
  }
};