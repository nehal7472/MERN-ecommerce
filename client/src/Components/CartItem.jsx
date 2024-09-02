/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/CartContext";

export default function CartItem({ value }) {
  const { removeItem } = useCartContext();
  return (
    <>
      <tbody>
        <tr className=" border-b text-[white]">
          <td className="px-6 py-4">
            <img src={value.image} alt="" className="w-[30px]" />
          </td>
          <td className="px-6 py-4">{value.title}</td>
          <td className="px-6 py-4">{value.price}৳</td>
          <td className="px-6 py-4">
            <FontAwesomeIcon icon={faCartPlus} className="pr-[5px]" />
            {value.amount}
          </td>
          <td className="px-6 py-4">{value.price * value.amount}৳</td>
          <td className="px-6 py-4">
            <a
              onClick={() => removeItem(value.id)}
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Remove
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
}
