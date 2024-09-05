/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Star from "../Components/Star";

export default function Product({ curElem }) {
  const { id, image, title, subTitle, rating } = curElem;

  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="cursor-pointer w-[180px] h-[18rem] hover:scale-105 transition-transform transform duration-300 text-left">
        <img
          src={image}
          alt="topBooksImage"
          className="w-[150px] h-[210px] rounded-md"
        />
        <h1>{`${title.slice(0, 13)} ...`}</h1>
        <h2>{`${subTitle.slice(0, 17)} ...`}</h2>
        <Star stars={rating} />
      </div>
    </NavLink>
  );
}
