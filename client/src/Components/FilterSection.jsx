import { useAuth } from "../store/auth";

export default function FilterSection() {
  const { services } = useAuth();
  const getArr = services.map((value) => value.genre);
  const newArr = [...new Set(getArr)];
  console.log(newArr);
  

  const getData = newArr.map((value, index) => {
    return (
      <li
        key={index}
        className="cursor-pointer hover:text-[#DA4A54] transition duration-400"
      >
        {value}
      </li>
    );
  });

  return (
    <div>
      <h2 className="text-[20px]">Searching..</h2>
      <div className="">
        <h3 className="text-[20px] font-semibold my-3 text-white">Category</h3>
        <ul className="text-[18px] flex flex-col gap-2 ">{getData}</ul>
      </div>
      <div className="">
        <h3 className="text-[20px] font-semibold my-3 text-white">Company</h3>
        <ul className="text-[18px] flex flex-col gap-2 ">
          <li className="cursor-pointer hover:text-[#DA4A54] transition duration-400">
            Boundless books
          </li>
          <li className="cursor-pointer hover:text-[#DA4A54] transition duration-400">
            Imaginary Inkwell
          </li>
          <li className="cursor-pointer hover:text-[#DA4A54] transition duration-400">
            Literary Contractors
          </li>
          <li className="cursor-pointer hover:text-[#DA4A54] transition duration-400">
            Masterpiece books
          </li>
        </ul>
      </div>
    </div>
  );
}
