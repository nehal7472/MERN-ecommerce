/* eslint-disable react/prop-types */
// import { NavLink } from "react-router-dom";
// import { useAuth } from "../store/auth";
// import { useEffect } from "react";

import { useFilterContext } from "../context/FilterContext";
import Product from "./Product";

export default function ProductList() {
  const { filter_products } = useFilterContext();

  return (
    <>
      {filter_products.map((curElem, index) => (
        <div key={index} className="w-[160px] h-[350px]">
          <Product curElem={curElem} />
        </div>
      ))}
    </>
  );
}
