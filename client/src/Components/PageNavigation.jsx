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
import Star from "./Star";

export default function PageNavigation({
  product,
  id,
  image,
  title,
  price,
  rating,
  review,
  discountPrice,
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
      <div className="relative">
        <div className="absolute top-4 left-4 text-3xl text-[#DA4A54]">
          <NavLink to="/">
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </NavLink>
        </div>
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center items-center">
          <div className="flex justify-center lg:w-1/2">
            <img
              src={image}
              alt="SingleImage"
              className="w-[280px] h-auto max-w-xs lg:max-w-md object-cover"
            />
          </div>
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-200 mb-4">
              {title}
            </h2>
            <Star stars={rating} review={review} />

            <p className="text-2xl line-through mb-4">BDT : {price}৳</p>
            <p className="text-2xl text-[#DA4A54] mb-4">
              After Discount : {discountPrice}৳
            </p>

            <div className="flex flex-col lg:flex-row gap-4 bg-slate-800 p-4 rounded-lg mb-4">
              <div className="flex flex-col items-center text-sm">
                <FontAwesomeIcon icon={faTruck} className="text-xl mb-2" />
                <p>Fast Delivery</p>
              </div>
              <div className="flex flex-col items-center text-sm">
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  className="text-xl mb-2"
                />
                <p>2 Years Warranty</p>
              </div>
            </div>

            <p className="mb-2 text-lg">ID : {subTitle}</p>
            <p className="text-lg mb-4">
              Available :{" "}
              <span
                className={`font-semibold ${
                  Available > 0 ? "text-[#DA4A54]" : "text-red-400"
                }`}
              >
                {Available > 0 ? "In Stock" : "Not in Stock"}
              </span>
            </p>
            <p className="text-lg mb-4">Total Stock : {Available}</p>

            <div className="my-4">
              <ProductAmountToggle
                amount={Available > 0 ? amount : "0"}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
              />
            </div>

            {Available > 0 ? (
              <NavLink
                to={`/cart`}
                onClick={() => addToCart(id, amount, title, price, product)}
              >
                <button className="btn btn-error w-full">Add To Cart</button>
              </NavLink>
            ) : (
              <button className="btn btn-error w-full" disabled>
                Not In Stock
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
