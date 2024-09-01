// import { NavLink } from "react-router-dom";
import { useFilterContext } from "../context/FilterContext";

export default function FilterSection() {
  const { all_products } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, "genre");

  return (
    <>
      <div>
        <h2 className="text-[20px]">Searching..</h2>
        <div className="">
          <h3 className="text-[20px] font-semibold my-3 text-white">
            Category
          </h3>
          <ul className="text-[18px] flex flex-col gap-2 ">
            {categoryData.map((v, i) => {
              return (
                <li
                  key={i}
                  className="cursor-pointer hover:text-[#DA4A54] transition duration-400"
                >
                  {v}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
