/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export default function CartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    let { id, amount, title, price, product } = action.payload;

    let cartProduct;

    cartProduct = {
      id,
      amount,
      title,
      price,
      image: product.image,
      max: product.Available,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }
  return state;
}
