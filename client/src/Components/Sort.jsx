import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFilterContext } from "../context/FilterContext";
import Logo from "../assets/books-logo.png";

export default function Sort() {
  const { sorting, filter_products } = useFilterContext();

  return (
    <>
      <div className="flex justify-between items-center mb-16">
        <img src={Logo} alt={"logo"} width={"50px"} />
        <h3>
          <span>
            Total Books &nbsp;
            <span className="text-[#DA4A54]">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </span>
          &nbsp; {filter_products?.length}
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
              <option value="a-z">price (a-z)</option>
              <option value="z-a">price (z-a)</option>
              <option value="lowest">price (lowest)</option>
              <option value="highest">price (highest)</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
}
