/* eslint-disable no-constant-condition */
import { useEffect, useState } from "react";
import FilterSection from "../Components/FilterSection";
import Footer from "../Components/Footer";
import Sort from "../Components/Sort";
import { useAuth } from "../store/auth";
import { NavLink } from "react-router-dom";

export default function Product() {
  const { services } = useAuth();

  let [catName, setCatName] = useState("");

  useEffect(() => {
    if (catName !== "") {
      console.log(catName);
    }
  }, [catName]);

  useEffect(() => {
    services;
  }, []);

  const products = services.map((v, i) => {
    return (
      <div key={i} className="w-[160px] h-[350px]">
        <NavLink to={`./singleproduct/${v.subTitle}`}>
          <div className="cursor-pointer">
            <img
              src={v.image}
              alt="topBooksImage"
              className="w-[150px] h-[210px] rounded-md"
            />
            <h1>{v.title}</h1>
            <h2>{v.subTitle}</h2>
            <span>stars</span>
          </div>
        </NavLink>
      </div>
    );
  });

  const filterProduct = services.map((v, i) => {
    if (v.genre == catName) {
      return (
        <div key={i} className="w-[160px] h-[350px]">
          <NavLink to={`./singleproduct/${v.subTitle}`}>
            <div className="cursor-pointer">
              <img
                src={v.image}
                alt="topBooksImage"
                className="w-[150px] h-[210px] rounded-md"
              />
              <h1>{v.title}</h1>
              <h2>{v.subTitle}</h2>
              <span>stars</span>
            </div>
          </NavLink>
        </div>
      );
    }
  });

  return (
    <>
      <div className="container grid grid-cols-6 gap-4 my-[40px] pt-[25px]">
        <div className="col-start-2 col-end-3">
          <FilterSection setCatName={setCatName} />
        </div>
        <div className="col-start-3 col-end-6">
          <div>
            <Sort />
          </div>
          <div className="grid grid-cols-3 gap-2 justify-items-center">
            {catName ? filterProduct : products}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
