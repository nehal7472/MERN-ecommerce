/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/CartContext";

export default function CartItem({ value }) {
  const { removeItem } = useCartContext();
  return (
    <>
      <tbody>
        <tr className="border-b text-white">
          <td className="px-4 py-2 sm:px-6 sm:py-4">
            <img src={value.image} alt="" className="w-8 sm:w-10" />
          </td>
          <td className="px-4 py-2 sm:px-6 sm:py-4">{value.title}</td>
          <td className="px-4 py-2 sm:px-6 sm:py-4">{value.price}৳</td>
          <td className="px-4 py-2 sm:px-6 sm:py-4">
            <FontAwesomeIcon icon={faCartPlus} className="pr-1" />
            {value.amount}
          </td>
          <td className="px-4 py-2 sm:px-6 sm:py-4">
            {value.price * value.amount}৳
          </td>
          <td className="px-4 py-2 sm:px-6 sm:py-4">
            <FontAwesomeIcon
              onClick={() => removeItem(value.id)}
              icon={faTrashCan}
              className="text-[#DA4A54] hover:text-red-600 transition duration-300 ease-in-out cursor-pointer"
            />
          </td>
        </tr>
      </tbody>
    </>
  );
}
