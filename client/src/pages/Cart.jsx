import CartItem from "../Components/CartItem";
import { useCartContext } from "../context/CartContext";

export default function Cart() {
  const { cart } = useCartContext();

  console.log(cart);

  return (
    <>
      <div className="container relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {cart.map((value, index) => {
            return <CartItem key={index} value={value} />;
          })}
        </table>
      </div>
    </>
  );
}
