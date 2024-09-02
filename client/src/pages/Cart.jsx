import CartItem from "../Components/CartItem";
import { useCartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

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
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
          <div className="flex justify-between pt-[15px]">
            <NavLink to={"/product"}>
              <button className="btn btn-success">Continue Shopping</button>
            </NavLink>
            <button className="btn btn-error" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
          {/* total calculate  */}
          <div className="flex justify-end ">
            <div className="overflow-x-auto flex flex-col items-center  h-screen scroll-m-2">
              <div className="w-[70%] grid grid-cols-2 gap-4 justify-items-start">
                <div className="card bg-base-100 w-96 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">
                      SubTotal :<span>00</span>
                    </h2>
                    <h2 className="card-title">
                      SubTotal :<span>00</span>
                    </h2>
                    <hr />
                    <h2 className="card-title">
                      Order Total :<span>00</span>
                    </h2>
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[15rem] flex justify-center items-center">
          <h2 className="text-[25px]">No Cart in Item Page❗</h2>
        </div>
      )}
    </>
  );
}
