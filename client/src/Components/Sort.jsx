import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFilterContext } from "../context/FilterContext";

export default function Sort() {
  const { sorting } = useFilterContext();

  return (
    <>
      <div className="flex justify-between items-center mb-16">
        <h2>Logo</h2>
        <h3>
          <span>
            Total Books
            <span className="text-[#DA4A54]">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </span>
          20
        </h3>
        {/* filter product  */}
        <div className="">
          <form action="#">
            <label htmlFor="sort"></label>
            <select
              onClick={sorting}
              name="sort"
              id="sort"
              className="text-[15px] py-[5px] px-[3px] border border-red-600 outline-none"
            >
              <option value="highest">price (highest)</option>
              <option value="lowest">price (lowest)</option>
              <option value="a-z">price (a-z)</option>
              <option value="z-a">price (z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
}
