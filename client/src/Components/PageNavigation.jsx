/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faCalendarCheck,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import ProductAmountToggle from "../Components/ProductAmountToggle";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";

export default function PageNavigation({
  product,
  id,
  image,
  title,
  price,
  rating,
  discountPrice,
  description,
  Available,
  subTitle,
}) {
  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < Available ? setAmount(amount + 1) : setAmount(Available);
  };

  return (
    <>
      <div>
        <div className="container text-[40px] text-[#DA4A54]">
          <NavLink to={"/"}>
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </NavLink>
        </div>
        <div className="container">
          <div className="w-[100%] flex justify-center items-center gap-[100px] py-[80px]">
            <div>
              <img src={image} alt="SingleImage" className="w-[200px]" />
            </div>
            <div className="w-[400px] ">
              <h2 className="text-[40px] text-slate-200">{title}</h2>
              <p className="text-red-300">{rating}</p>
              <p className="text-[30px] line-through">BDT : {price}</p>
              <p className="text-[25px] text-[#DA4A54]">
                After Discount : {discountPrice}
              </p>
              <p>{description}</p>
              <div className="flex gap-[15px] bg-slate-800 w-[250px] justify-center rounded-lg my-[7px] p-[7px]">
                <div className="flex flex-col justify-center items-center ">
                  <p>
                    <FontAwesomeIcon icon={faTruck} />
                  </p>
                  <p className="text-25px">fast delivery</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span>
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </span>{" "}
                  <p className="text-25px">2 years warranty</p>
                </div>
              </div>
              <p className="text-25px">
                Available :{" "}
                <span className="text-[#DA4A54]">
                  {Available > 0 ? "In Stock" : "Not in stock"}
                </span>
              </p>
              <p>ID : {subTitle}</p>
              <div className="my-[10px]">
                <ProductAmountToggle
                  amount={amount}
                  setDecrease={setDecrease}
                  setIncrease={setIncrease}
                />
              </div>
              <NavLink
                to={`/cart`}
                onClick={() => addToCart(id, amount, title, price, product)}
              >
                <button className="btn btn-error">Add To Card</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
