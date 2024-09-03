/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import CartItem from "../Components/CartItem";
import { useCartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

import Checkout from "../Components/Checkout";

export default function Cart() {
  const { cart, clearCart } = useCartContext();

  const { isLoggedIn } = useAuth();

  if (cart.length === 0) {
    return (
      <div className="h-[15rem] flex justify-center items-center">
        <h2 className="text-[25px]">No Cart in Item Page❗</h2>
      </div>
    );
  }

  return (
    <>
      {isLoggedIn ? (
        <div className="container">
          <div className=" relative overflow-x-auto shadow-md ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Remove
                  </th>
                </tr>
              </thead>
              {cart.map((value, index) => {
                return <CartItem key={index} value={value} />;
              })}
            </table>
            <hr />
          </div>
          <div className="flex justify-between p-[15px]">
            <NavLink to={"/product"}>
              <button className="btn btn-success">Continue Shopping</button>
            </NavLink>
            <button className="btn btn-error" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
          {/* payment method start */}
          <Checkout />;
          {/* payment method end */}
        </div>
      ) : (
        <div className="h-[15rem] flex justify-center items-center">
          <h2 className="text-[25px]">No Cart in Item Page❗</h2>
        </div>
      )}
    </>
  );
}
