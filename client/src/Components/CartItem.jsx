/* eslint-disable react/prop-types */
export default function CartItem({ value }) {
  return (
    <>
      <tbody>
        <tr className=" border-b text-[white]">
          <td className="px-6 py-4">
            <img src={value.image} alt="" className="w-[30px]" />
          </td>
          <td className="px-6 py-4">{value.title}</td>
          <td className="px-6 py-4">{value.id}</td>
          <td className="px-6 py-4">{value.price}</td>
          <td className="px-6 py-4">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
}
