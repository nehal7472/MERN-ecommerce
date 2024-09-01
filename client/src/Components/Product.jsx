/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function Product({ curElem }) {
  const { id, image, title, subTitle } = curElem;

  return (
    <NavLink to={`/singleproduct/${id}`}>
     <div className="cursor-pointer w-[180px] h-[18rem]">
              <img
                src={image}
                alt="topBooksImage"
                className="w-[150px] h-[210px] rounded-md"
              />
              <h1>{title}</h1>
              <h2>{subTitle}</h2>
              <span>stars</span>
            </div>
    </NavLink>
  );
}
