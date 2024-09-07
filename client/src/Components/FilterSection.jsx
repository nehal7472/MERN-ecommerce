// import { NavLink } from "react-router-dom";
import { useFilterContext } from "../context/FilterContext";

export default function FilterSection() {
  const {
    all_products,
    filters: { text },
    updateFilterValue,
  } = useFilterContext();

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
        <form onClick={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>

        <div className="pt-[3rem] sticky">
          <h3 className="text-[20px] font-semibold my-3 text-white ">
            Category
          </h3>
          <ul className="text-[18px] flex flex-col gap-8 ">
            {categoryData?.map((v, i) => {
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
