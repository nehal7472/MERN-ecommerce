import Heading from "./Heading";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useFilterContext } from "../context/FilterContext";
import Star from "./Star";

export default function TapBook() {
  const { filter_products } = useFilterContext();
  const [show, setShow] = useState(false);

  const headingInfo = {
    author: "Best Books",
    heading: "Top Books",
    paragraph:
      "Discover the top books available in our collection. Curated just for you!",
  };

  const showData = filter_products.map((v) => (
    <div
      key={v.id}
      className="w-full sm:w-[160px] md:w-[180px] lg:w-[200px] h-[350px] flex flex-col items-center bg-[#1F2937] p-4 rounded-lg shadow-lg hover:scale-105 transition-transform transform duration-300 text-center"
    >
      <NavLink to={`/singleproduct/${v.id}`}>
        <div className="cursor-pointer">
          <img
            src={v.image}
            alt={v.title}
            className="w-full h-[210px] object-cover rounded-md mb-4"
          />
          <h1 className="text-lg font-semibold text-white">{v.title}</h1>
          <h2 className="text-sm text-gray-400">{v.subTitle}</h2>
          <Star stars={v.rating} />
        </div>
      </NavLink>
    </div>
  ));

  const showBooks = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="bg-[#111827] py-12">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <Heading
            author={headingInfo.author}
            heading={headingInfo.heading}
            paragraph={headingInfo.paragraph}
          />

          {/* Book Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center mt-8">
            {!show ? showData.slice(0, 5) : showData}
          </div>

          {/* Button */}
          <div className="flex justify-center mt-10">
            <button onClick={showBooks} className="btn btn-error text-white">
              {show ? "Hide All Books" : "View All Books"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
