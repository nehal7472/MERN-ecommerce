import { NavLink, useParams } from "react-router-dom";
import { BooksInfo } from "../Components/Data/Booksinfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faCalendarCheck,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import ProductAmountToggle from "../Components/ProductAmountToggle";
import { useState } from "react";

export default function SingleProduct() {
  const { id } = useParams();

  const product = BooksInfo.find((product) => product.subTitle === id);

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < product.Available
      ? setAmount(amount + 1)
      : setAmount(product.Available);
  };

  return (
    <>
      <div className="container text-[40px]">
        <NavLink to={"/product"}>
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </NavLink>
      </div>
      <div className="container">
        <div className="w-[100%] flex justify-center items-center gap-[100px] py-[150px]">
          <div>
            <img src={product.image} alt="SingleImage" className="w-[200px]" />
          </div>
          <div className="w-[400px] ">
            <h2 className="text-[40px] text-slate-200">{product.title}</h2>
            <p className="text-red-300">{product.rating}</p>
            <p className="text-[30px] line-through">BDT : {product.price}</p>
            <p className="text-[25px] text-[#DA4A54]">
              After Discount : {product.discountPrice}
            </p>
            <p>{product.description}</p>
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
                {product.Available > 0 ? "In Stock" : "Not in stock"}
              </span>
            </p>
            <p>ID : {product.subTitle}</p>
            <div className="my-[10px]">
              <ProductAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
              />
            </div>
            <NavLink to={`/cart`}>
              <button className="btn btn-error">Add To Card</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
