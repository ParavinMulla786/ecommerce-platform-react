// INITIAL STATE
export const cartInitialState = {
  cart: [],
  discount: 5,
  platformFee: 100,
  deliveryCharges: 50,
  totalAmount: 0,
  len: 0,
};

// CALCULATION FUNCTION
function calculateAmount(
  uCart,
  dis,
  platFee,
  delCharge
) {
  const tAmount = uCart.reduce(
    (total, item) => {
      return (
        total +
        item.productPRICE *
          item.productQuantity
      );
    },
    0
  );

  const discountAmount =
    tAmount - tAmount * (dis / 100);

  const total =
    discountAmount + platFee + delCharge;

  return {
    cart: uCart,
    discount: dis,
    platformFee: platFee,
    deliveryCharges: delCharge,
    totalAmount: total,
    len: uCart.length,
  };
}

// REDUCER
export function cartReducer(state, action) {
  switch (action.type) {

    // ADD TO CART
    case "ADD_TO_CART": {
      const index = state.cart.find